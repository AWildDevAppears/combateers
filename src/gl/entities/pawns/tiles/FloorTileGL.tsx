import { Vector3 } from "@react-three/fiber";
import React, { FunctionComponent, ReactNode } from "react";
import { ITileProps } from "../../../../data/Tiles";

const FLOOR_SIZE = 6;

interface IWallSlot {
  pos: Vector3;
  rot: number;
}

export const FLOOR_MAX = 2.75;
export const FLOOR_MIN = -2.75;

export const FLOOR_WALL_SLOTS: { [key: number]: IWallSlot } = {
  1: { pos: [FLOOR_MAX, 0, 0], rot: 0 },
  2: { pos: [FLOOR_MIN, 0, 0], rot: 0 },
  3: { pos: [0, 0, FLOOR_MAX], rot: Math.PI / 2 },
  4: { pos: [0, 0, FLOOR_MIN], rot: Math.PI / 2 },
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
