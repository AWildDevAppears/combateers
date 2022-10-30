import React, { FunctionComponent, ReactNode, useRef } from "react";
import { Mesh } from "three";

interface ICollisionProviderGLProps {
  children?: ReactNode;
}

export const GROUP_LAYERS = {
  GROUND: "ground",
  WALLS: "walls",
  ENEMIES: "enemies",
};

interface ICollisionContext {
  collisionGroups: { [key: string]: { [key: string]: Mesh } };
  addToGroup: (group: string, mesh: Mesh) => void;
  removeFromGroup: (group: string, mesh: Mesh) => void;
}

export const CollisionContext = React.createContext<ICollisionContext>({
  collisionGroups: {
    [GROUP_LAYERS.GROUND]: {},
    [GROUP_LAYERS.WALLS]: {},
    [GROUP_LAYERS.ENEMIES]: {},
  },
  addToGroup: (group: string, mesh: Mesh) => {},
  removeFromGroup: (group: string, mesh: Mesh) => {},
});

export const CollisionProviderGL: FunctionComponent<
  ICollisionProviderGLProps
> = ({ children }) => {
  const collisionGroups = useRef<{ [key: string]: { [key: string]: Mesh } }>({
    [GROUP_LAYERS.GROUND]: {},
    [GROUP_LAYERS.WALLS]: {},
    [GROUP_LAYERS.ENEMIES]: {},
  });

  const addToGroup = (group: string, mesh?: Mesh) => {
    if (!mesh) return;

    collisionGroups.current[group][mesh.uuid] = mesh;
  };

  const removeFromGroup = (group: string, mesh?: Mesh) => {
    if (!mesh) return;

    Reflect.deleteProperty(collisionGroups.current[group], mesh.uuid);
  };

  return (
    <CollisionContext.Provider
      value={{
        collisionGroups: collisionGroups.current,
        addToGroup,
        removeFromGroup,
      }}
    >
      {children}
    </CollisionContext.Provider>
  );
};