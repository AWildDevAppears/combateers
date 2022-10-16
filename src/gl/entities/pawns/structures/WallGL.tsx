import { Vector3 } from "@react-three/fiber";
import React, { FunctionComponent } from "react";

interface IWallGLProps {
  position?: Vector3;
  rotateY?: number;
}

export const WallGL: FunctionComponent<IWallGLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <mesh scale={1} position={position} rotation-y={rotateY}>
      <boxGeometry args={[0.5, 2, 6]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};
