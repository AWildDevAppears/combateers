import { useSphere } from "@react-three/cannon";
import { useFrame } from "@react-three/fiber";
import React, { FunctionComponent, Ref, useRef } from "react";
import { Vector3 } from "three";
import { useInput } from "../../../common/hooks/useInput";
import { GROUP_LAYERS } from "../../logistics/collisions/CollisionProviderGL/CollisionProviderGL";
import {
  ICollisionMap,
  useCollision,
} from "../../logistics/collisions/CollisionProviderGL/hooks/useCollision";

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
  const collisions = {
    collU: false,
    collD: false,
    collL: false,
    collR: false,
  };

  useCollision(
    GROUP_LAYERS.WALLS,
    ({ collU, collD, collL, collR }) => {
      collisions.collU = collU;
      collisions.collD = collD;
      collisions.collL = collL;
      collisions.collR = collR;
    },
    mesh.current as THREE.Mesh
  );

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

    // TODO: Allow player model to rotate and walk in facing direction.

    frontVector.set(
      0,
      0,
      Number(forward && !collisions.collU) -
        Number(backward && !collisions.collD)
    );
    sideVector.set(
      Number(right && !collisions.collR) - Number(left && !collisions.collL),
      0,
      0
    );
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED);

    api.velocity.set(direction.x, -10, direction.z);
  });

  return (
    <mesh ref={mesh as Ref<THREE.Mesh>} scale={1}>
      <boxGeometry args={[1, 1, 1]} />
    </mesh>
  );
};
