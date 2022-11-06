import React, { FunctionComponent, ReactNode, useState } from "react";

interface IQuestProviderGLProps {
  children?: ReactNode;
}

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
  onInteract: (key: string) => void;
  onInteractFinished: (key: string, cb: () => void) => void;
  generateNewMap: () => void;
}

export const QuestContext = React.createContext<IQuestContext>({
  map: [],
  mapInteractableStates: {},
  onInteract: (key: string) => {},
  onInteractFinished: (key: string, cb: () => void) => {},
  generateNewMap: () => {},
});

export const QuestProviderGL: FunctionComponent<IQuestProviderGLProps> = ({
  children,
}) => {
  const [mapInteractableStates, setMapInteractableStates] = useState<{
    [key: string]: IInteractableBoolean | IInteractableContainer;
  }>({});

  const onInteract = (key: string) => {
    if (!Reflect.has(mapInteractableStates, key)) return;

    if (mapInteractableStates[key].type === "bool") {
      setMapInteractableStates((states) => {
        const state = { ...states };
        state[key].isActive = !state[key].isActive;

        return state;
      });
    }

    if (mapInteractableStates[key].type === "container") {
      // Handle opening a container to view its inventory
    }
  };

  const onInteractFinished = (key: string, cb: () => void) => {};

  const generateNewMap = () => {};

  return (
    <QuestContext.Provider
      value={{
        map: [],
        mapInteractableStates,
        onInteract,
        onInteractFinished,
        generateNewMap,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
};
