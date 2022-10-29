import React, { FunctionComponent, useRef } from "react";
import { Mesh } from "three";
import { WALL_HEIGHT } from "../../../../constants";
import { GROUP_LAYERS } from "../../../logistics/collisions/CollisionProviderGL/CollisionProviderGL";
import { useCollisionGroup } from "../../../logistics/collisions/CollisionProviderGL/hooks/useCollisionGroup";

interface IDoorGLProps {
  position?: [number, number, number];
  rotateY?: number;
}

export const DoorGL: FunctionComponent<IDoorGLProps> = ({
  position,
  rotateY,
}) => {
  const doorTopRef = useRef<Mesh>(null);
  const doorLeftRef = useRef<Mesh>(null);
  const doorRightRef = useRef<Mesh>(null);

  // TODO: Allow useCollisionGroup to handle mesh groups so we only have to call it once for complex(?) entities.
  useCollisionGroup(GROUP_LAYERS.WALLS, doorTopRef);
  useCollisionGroup(GROUP_LAYERS.WALLS, doorLeftRef);
  useCollisionGroup(GROUP_LAYERS.WALLS, doorRightRef);

  return (
    <group position={position} rotation-y={rotateY}>
      <mesh scale={1} position={[0, 0, -2]} ref={doorLeftRef}>
        <boxGeometry args={[0.5, WALL_HEIGHT, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh scale={1} position={[0, 0, 2]} ref={doorRightRef}>
        <boxGeometry args={[0.5, WALL_HEIGHT, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
      <mesh scale={1} position={[0, 0.85, 0]} ref={doorTopRef}>
        <boxGeometry args={[0.5, 0.3, 2]} />
        <meshStandardMaterial color={"red"} />
      </mesh>
    </group>
  );
};
