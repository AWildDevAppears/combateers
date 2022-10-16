import React, { FunctionComponent, ReactNode } from "react";

const FLOOR_SIZE = 6;

export const FLOOR_WALL_SLOTS = {
  1: { pos: [2.75, 0, 0], rot: 0 },
  2: { pos: [-2.75, 0, 0], rot: 0 },
  3: { pos: [0, 0, 2.75], rot: Math.PI / 2 },
  4: { pos: [0, 0, -2.75], rot: Math.PI / 2 },
};

interface IFloorTileGLProps {
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
