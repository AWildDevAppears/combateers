import React, { FunctionComponent, ReactNode, useRef, useState } from "react";
import { Tilesets } from "../../../../data/Tilesets";

interface IQuestProviderGLProps {
  children?: ReactNode;
}

export type InteractableType = "bool" | "container";

interface IInteractableBoolean {
  type: "bool";
  isActive: boolean;
}

interface IInteractableContainer {
  type: "container";
  state: Array<string>;
  isActive: boolean;
}

interface IQuestContext {
  map: Array<Array<string>>;
  mapInteractableStates: {
    [key: string]: IInteractableBoolean | IInteractableContainer;
  };
  currentOverlay: string;
  currentInteractive: { key: string; cb: () => void };
  onInteract: (key: string, cb: () => void) => void;
  addInteractive: (id: string, type: InteractableType) => void;
  endInteraction: () => void;
  generateNewMap: () => void;
}

export const QuestContext = React.createContext<IQuestContext>({
  map: [],
  mapInteractableStates: {},
  currentInteractive: { key: "", cb: () => {} },
  currentOverlay: "",
  onInteract: (key: string, cb: () => void) => {},
  addInteractive: (id: string, type: InteractableType) => {},
  endInteraction: () => {},
  generateNewMap: () => {},
});

export const QuestProviderGL: FunctionComponent<IQuestProviderGLProps> = ({
  children,
}) => {
  const [mapInteractableStates, setMapInteractableStates] = useState<{
    [key: string]: IInteractableBoolean | IInteractableContainer;
  }>({});

  const [map, setMap] = useState<string[][]>([]);

  const [currentInteractive, setCurrentInteractive] = useState({
    key: "",
    cb: () => {},
  });

  const [currentOverlay, setCurrentOverlay] = useState<string>("");

  const onInteract = (key: string, cb: () => void) => {
    if (!Reflect.has(mapInteractableStates, key)) return;

    setCurrentInteractive({ key, cb });

    if (mapInteractableStates[key].type === "bool") {
      setMapInteractableStates((states) => {
        const state = { ...states };
        state[key].isActive = !state[key].isActive;

        return state;
      });
    }

    if (mapInteractableStates[key].type === "container") {
      // Handle opening a container to view its inventory
      setCurrentOverlay("container");
    }
  };

  const generateNewMap = () => {
    const currentMap = Tilesets.devRoom;
    setMap(currentMap);
  };

  const addInteractive = (id: string, type: InteractableType) => {
    const newInteractable: IInteractableBoolean | IInteractableContainer =
      type === "container"
        ? {
            type,
            state: [],
            isActive: false,
          }
        : {
            type,
            isActive: false,
          };

    setMapInteractableStates((state) => ({
      ...state,
      [id]: newInteractable,
    }));
  };

  const endInteraction = () => {
    setCurrentOverlay("");

    if (currentInteractive.key !== "") {
      currentInteractive.cb();

      setCurrentInteractive({ key: "", cb: () => {} });
    }
  };

  return (
    <QuestContext.Provider
      value={{
        map,
        mapInteractableStates,
        currentInteractive,
        currentOverlay,
        addInteractive,
        endInteraction,
        onInteract,
        generateNewMap,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
};
