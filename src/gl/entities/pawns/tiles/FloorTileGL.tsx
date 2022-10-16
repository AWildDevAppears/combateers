import { group } from "console";
import React, { FunctionComponent, ReactNode } from "react";

const FLOOR_SIZE = 6;

interface IFloorTileGLProps {
  children?: ReactNode;
}

export const FloorTileGL: FunctionComponent<IFloorTileGLProps> = ({
  children,
}) => {
  return (
    <group>
      <mesh>
        <boxGeometry args={[FLOOR_SIZE, 0.5, FLOOR_SIZE]} />
        <meshStandardMaterial color={"blue"} />
      </mesh>
      {React.Children.count(children) > 0 && (
        <group position={[0, 1.25, 0]}>{children}</group>
      )}
    </group>
  );
};
