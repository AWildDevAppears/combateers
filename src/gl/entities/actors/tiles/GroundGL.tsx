import { Plane } from "@react-three/drei";
import { CuboidCollider, RigidBody } from "@react-three/rapier";
import React, { FunctionComponent, useMemo, useRef } from "react";

interface IGroundGLProps {
  position: [number, number, number];
  size: [number, number, number];
}

export const GroundGL: FunctionComponent<IGroundGLProps> = ({
  position,
  size,
}) => {
  const mesh = useRef(null);

  const colliderSize: [number, number, number] = useMemo(
    () => [size[0] / 2, size[1] / 2, size[2] / 2],
    [size]
  );
  return (
    <CuboidCollider position={position} args={colliderSize}>
      <Plane
        ref={mesh}
        args={[size[0], size[2]]}
        rotation={[-Math.PI / 2, 0, 0]}
      >
        <meshStandardMaterial color={"blue"} />
      </Plane>
    </CuboidCollider>
  );
};
