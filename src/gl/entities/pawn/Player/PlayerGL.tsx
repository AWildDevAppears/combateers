import { useFrame, useThree } from "@react-three/fiber";
import { CylinderCollider, RigidBody, RigidBodyApi } from "@react-three/rapier";
import React, { FunctionComponent, useContext, useEffect, useRef } from "react";
import { Group, Vector3 } from "three";
import { InputContext } from "../../../../common/services/input/InputProvider";
import { DamageSphere } from "../../actors/structures/helpers/DamageSphere";
import { GLTFMeshGL } from "../../constructors/GLTFMeshGL";
import { WeaponSlot } from "../Slots/WeaponSlot";

interface IPlayerGLProps {
  position: [number, number, number];
  lockIdle?: boolean;
}

const MOVE_SPEED = 5;

// Stand in for player.
export const PlayerGL: FunctionComponent<IPlayerGLProps> = ({
  position,
  lockIdle = true,
}) => {
  const rbRef = useRef<RigidBodyApi>(null);
  const mesh = useRef<Group>(null);

  const { camera } = useThree();

  const ctx = useContext(InputContext);
  const { forward, backward, left, right, rotation } = ctx.inputs;
  const moveCharacter = () => {
    const api = rbRef.current as RigidBodyApi;
    const pawn = mesh.current as Group;

    const trans: [number, number, number] = api.translation().toArray();
    pawn.position.set(trans[0], 0, trans[2]);

    // Rotate character
    pawn.rotation.set(0, rotation.y, 0);

    // Calculating front/side movement
    let frontVector = new Vector3(0, 0, 0);
    let sideVector = new Vector3(0, 0, 0);
    let direction = new Vector3(0, 0, 0);

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(pawn.rotation);

    api.setLinvel({ x: direction.x, y: 0, z: direction.z });
  };

  const handleAttack = () => {};

  const handleIdle = () => {};

  useEffect(() => {
    if (!mesh.current) return;
    const api = rbRef.current as RigidBodyApi;
    api.setEnabledRotations(false, false, false);
    api.setAngularDamping(1);
    api.setLinearDamping(1);

    // TODO: Attach camera to retractible boom arm so it doesn't go through walls.
    mesh.current.add(camera);
    camera.position.set(0, 1.8, 1);
    camera.lookAt(0, 0.8, -1);
  }, [mesh, rbRef]);

  useFrame(() => {
    if (lockIdle) {
      handleIdle();
      return;
    }

    moveCharacter();
    handleAttack();
  });

  return (
    <>
      <group>
        <RigidBody colliders={false} position={position} ref={rbRef}>
          <CylinderCollider args={[0.8, 0.5]} />

          <WeaponSlot />

          <DamageSphere position={[0, 0, -1]} />
        </RigidBody>

        <GLTFMeshGL
          meshName="person-male"
          ref={mesh}
          rotation-y={Math.PI}
        ></GLTFMeshGL>
      </group>
    </>
  );
};
