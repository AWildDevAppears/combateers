import React, { FunctionComponent, ReactNode } from "react";
import { ITileProps } from "../../../../data/Tiles";

const FLOOR_SIZE = 6;

interface IWallSlot {
  pos: [number, number, number];
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
 * Doesn't actually create a floor tile per say.
 * Enforces a size for each tile and locks all of the walls and objects to the tiles scale.
 * The actual ground will be created be the TileMap.
 */
export const FloorTileGL: FunctionComponent<IFloorTileGLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <group position={position} rotation-y={rotateY}>
      {React.Children.count(children) > 0 && (
        <group position={[0, 1, 0]}>{children}</group>
      )}
    </group>
  );
};
