import { CuboidCollider } from "@react-three/rapier";
import React, { FunctionComponent, useEffect, useRef } from "react";
import { WALL_HEIGHT } from "../../../../constants";

interface IDoorGLProps {
  position?: [number, number, number];
  rotateY?: number;
}

export const DoorGL: FunctionComponent<IDoorGLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <group position={position} rotation-y={rotateY}>
      <CuboidCollider position={[0, 0, -2]} args={[0.25, WALL_HEIGHT / 2, 1]}>
        <mesh scale={1}>
          <boxGeometry args={[0.5, WALL_HEIGHT, 2]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </CuboidCollider>

      <CuboidCollider position={[0, 0, 2]} args={[0.25, WALL_HEIGHT / 2, 1]}>
        <mesh scale={1}>
          <boxGeometry args={[0.5, WALL_HEIGHT, 2]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </CuboidCollider>

      <CuboidCollider position={[0, 0.85, 0]} args={[0.25, 0.3 / 2, 1]}>
        <mesh scale={1}>
          <boxGeometry args={[0.5, 0.3, 2]} />
          <meshStandardMaterial color={"red"} />
        </mesh>
      </CuboidCollider>
    </group>
  );
};
