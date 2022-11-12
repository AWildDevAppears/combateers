import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { CapsuleCollider, RigidBody, RigidBodyApi } from "@react-three/rapier";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useMemo,
  useRef,
} from "react";
import { Group, Vector3 } from "three";
import { InputContext } from "../../../common/services/input/InputProvider";

interface IPawnGLProps {
  position: [number, number, number];
  lockIdle?: boolean;
}

const MOVE_SPEED = 5;

// Stand in for player.
export const PawnGL: FunctionComponent<IPawnGLProps> = ({
  position,
  lockIdle = true,
}) => {
  const rbRef = useRef<RigidBodyApi>(null);
  const mesh = useRef<Group>(null);

  const { camera } = useThree();

  const ctx = useContext(InputContext);
  const { forward, backward, left, right, rotation } = ctx.inputs;

  const { nodes, materials } = useGLTF("/meshes/person-male.glb");
  const currentNodes = useMemo(() => Object.values(nodes), [nodes]);

  const handleIdle = () => {};

  useEffect(() => {
    if (!mesh.current) return;
    const api = rbRef.current as RigidBodyApi;
    api.setEnabledRotations(false, false, false);
    api.setAngularDamping(1);
    api.setLinearDamping(1);

    mesh.current.add(camera);
    camera.position.set(0, 1.6, 4);
    camera.lookAt(0, 0.3, 0);
  }, [mesh, rbRef]);

  useFrame(() => {
    if (lockIdle) {
      handleIdle();
      return;
    }

    const api = rbRef.current as RigidBodyApi;
    const pawn = mesh.current as Group;

    const trans: [number, number, number] = api.translation().toArray();
    pawn.position.set(trans[0], 0, trans[2]);

    // Calculating front/side movement ...
    let frontVector = new Vector3(0, 0, 0);
    let sideVector = new Vector3(0, 0, 0);
    let direction = new Vector3(0, 0, 0);

    // TODO: Allow player model to rotate and walk in facing direction.
    pawn.rotation.set(0, rotation.y, 0);

    frontVector.set(0, 0, backward - forward);
    sideVector.set(left - right, 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(MOVE_SPEED)
      .applyEuler(pawn.rotation);

    api.setLinvel({ x: direction.x, y: 0, z: direction.z });
  });

  return (
    <>
      <group>
        <group ref={mesh} position={[0, 0, 0]}>
          {currentNodes &&
            currentNodes.map((node, idx) => (
              <mesh key={idx} scale={1} geometry={(node as any).geometry} />
            ))}
        </group>
        <RigidBody
          colliders={"hull"}
          position={position}
          ref={rbRef}
          type="dynamic"
          mass={1}
        >
          <CapsuleCollider args={[0.3, 0.5]} />
        </RigidBody>
      </group>
    </>
  );
};
