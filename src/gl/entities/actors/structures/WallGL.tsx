import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, { FunctionComponent, useRef } from "react";

import { TILE_SIZE, WALL_HEIGHT } from "../../../../constants";

interface IWallGLProps {
  position?: [number, number, number];
  rotateY?: number;
}

export const WallGL: FunctionComponent<IWallGLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <CuboidCollider
      position={position}
      args={[0.25, WALL_HEIGHT / 2, TILE_SIZE / 2]}
      rotation={[0, rotateY ?? 0, 0]}
    >
      <mesh scale={1}>
        <boxGeometry args={[0.5, WALL_HEIGHT, TILE_SIZE]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </CuboidCollider>
  );
};
