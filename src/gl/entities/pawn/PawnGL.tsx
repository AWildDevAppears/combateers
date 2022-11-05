import { useFrame } from "@react-three/fiber";
import { RigidBody, RigidBodyApi } from "@react-three/rapier";
import React, {
  FunctionComponent,
  Ref,
  RefObject,
  useEffect,
  useRef,
} from "react";
import { Mesh, Vector3 } from "three";
import { useInput } from "../../../common/hooks/useInput";

interface IPawnGLProps {
  position: [number, number, number];
  lockIdle?: boolean;
}

const MOVE_SPEED = 0.1;

// Stand in for player.
export const PawnGL: FunctionComponent<IPawnGLProps> = ({
  position,
  lockIdle = true,
}) => {
  const mesh = useRef<RigidBodyApi>(null);
  const { forward, backward, left, right } = useInput();
  const collisions = {
    collU: false,
    collD: false,
    collL: false,
    collR: false,
  };

  const handleIdle = () => {};

  useEffect(() => {
    const api = mesh.current as RigidBodyApi;
    api.setEnabledRotations(false, false, false);
    api.setAngularDamping(1);
    api.setLinearDamping(1);
  }, [mesh]);

  useFrame(() => {
    if (lockIdle) {
      handleIdle();
      return;
    }

    const api = mesh.current as RigidBodyApi;

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

    api.applyImpulse({ x: direction.x, y: 0, z: direction.z });
  });

  return (
    <RigidBody colliders="hull" position={position} ref={mesh}>
      <mesh scale={1}>
        <boxGeometry args={[1, 1, 1]} />
      </mesh>
    </RigidBody>
  );
};
