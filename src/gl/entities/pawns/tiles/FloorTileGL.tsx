import { Vector3 } from "@react-three/fiber";
import React, { FunctionComponent, ReactNode } from "react";
import { ITileProps } from "../../../../data/Tiles";

const FLOOR_SIZE = 6;

export const FLOOR_WALL_SLOTS = {
  1: { pos: [2.75, 0, 0], rot: 0 },
  2: { pos: [-2.75, 0, 0], rot: 0 },
  3: { pos: [0, 0, 2.75], rot: Math.PI / 2 },
  4: { pos: [0, 0, -2.75], rot: Math.PI / 2 },
};

interface IFloorTileGLProps extends ITileProps {
  children?: ReactNode;
}

/**
 *
 * x x x x x
 * x x x x x
 * x x x x x
 * x x x x x
 * x x x x x
 *
 */
export const FloorTileGL: FunctionComponent<IFloorTileGLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <group position={position} rotation-y={rotateY}>
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
