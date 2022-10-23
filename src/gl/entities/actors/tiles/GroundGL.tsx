import { usePlane } from "@react-three/cannon";
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
  const [mesh] = usePlane(() => ({
    position,
    rotation: [-Math.PI / 2, 0, 0],
  }));
  return (
    <Plane ref={mesh} args={size}>
      <meshStandardMaterial color={"blue"} />
    </Plane>
  );
};
