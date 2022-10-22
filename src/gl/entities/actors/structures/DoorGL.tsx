import { Vector3 } from "@react-three/fiber";
import { group } from "console";
import React, { FunctionComponent } from "react";

interface IDoorGLProps {
  position?: Vector3;
  rotateY?: number;
}

export const DoorGL: FunctionComponent<IDoorGLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <group position={position} rotation-y={rotateY}>
      <mesh scale={1} position={[0, 0, -2]}>
        <boxGeometry args={[0.5, 2, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh scale={1} position={[0, 0, 2]}>
        <boxGeometry args={[0.5, 2, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh scale={1} position={[0, 0.75, 0]}>
        <boxGeometry args={[0.5, 0.5, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
};
