import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import React, { FunctionComponent, Ref, useEffect, useRef } from "react";
import { Vector3 } from "three";
import { useInput } from "../../../common/hooks/useInput";

interface IPawnGLProps {
  position: [number, number, number];
  lockIdle?: boolean;
}

const MOVE_SPEED = 10;

// Stand in for player.
export const PawnGL: FunctionComponent<IPawnGLProps> = ({
  position,
  lockIdle = true,
}) => {
  const [mesh, api] = useSphere(() => ({
    position,
    mass: lockIdle ? 0 : 10,
    fixedRotation: true,
  }));
  const { forward, backward, left, right } = useInput();

  const handleIdle = () => {};

  useFrame(() => {
    if (lockIdle) {
      handleIdle();
      return;
    }

    // Calculating front/side movement ...
    let frontVector = new Vector3(0, 0, 0);
    let sideVector = new Vector3(0, 0, 0);
    let direction = new Vector3(0, 0, 0);

    frontVector.set(0, 0, Number(forward) - Number(backward));
    sideVector.set(Number(right) - Number(left), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED);

    api.velocity.set(direction.x, -10, direction.z);
  });

  return (
    <mesh ref={mesh as Ref<THREE.Mesh>} scale={1}>
      <boxGeometry args={[1, 1.8, 1]} />
    </mesh>
  );
};
