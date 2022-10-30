import React, { FunctionComponent, ReactNode, useState } from "react";

interface IQuestProviderGLProps {
  children?: ReactNode;
}

interface IInteractableBoolean {
  type: "bool";
  state: boolean;
}

interface IInteractableContainer {
  type: "container";
  state: Array<string>;
}

interface IQuestContext {
  map: Array<Array<string>>;
  mapInteractableStates: {
    [key: string]: IInteractableBoolean | IInteractableContainer;
  };
  onInteract: (key: string) => void;
  generateNewMap: () => void;
}

export const QuestContext = React.createContext<IQuestContext>({
  map: [],
  mapInteractableStates: {},
  onInteract: (key: string) => {},
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
        state[key].state = !state[key].state;

        return state;
      });
    }

    if (mapInteractableStates[key].type === "container") {
      // Handle opening a container to view its inventory
    }
  };

  const generateNewMap = () => {};

  return (
    <QuestContext.Provider
      value={{
        map: [],
        mapInteractableStates,
        onInteract,
        generateNewMap,
      }}
    >
      {children}
    </QuestContext.Provider>
  );
};
