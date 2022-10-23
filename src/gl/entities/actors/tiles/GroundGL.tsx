import { Plane } from "@react-three/drei";
import React, { FunctionComponent } from "react";

interface IGroundGLProps {
  position: [number, number, number];
  size: [number, number];
}

export const GroundGL: FunctionComponent<IGroundGLProps> = ({
  position,
  size,
}) => {
  return (
    <Plane position={position} args={size} rotation-x={-Math.PI / 2}>
      <meshStandardMaterial color={"blue"} />
    </Plane>
  );
};
