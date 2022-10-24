import { useBox } from "@react-three/cannon";
import React, {
  FunctionComponent,
  Ref,
  useContext,
  useEffect,
  useRef,
} from "react";

import { TILE_SIZE, WALL_HEIGHT } from "../../../../constants";
import {
  CollisionContext,
  GROUP_LAYERS,
} from "../../../logistics/collisions/CollisionProviderGL/CollisionProviderGL";
import { useCollisionGroup } from "../../../logistics/collisions/CollisionProviderGL/hooks/useCollisionGroup";

interface IWallGLProps {
  position?: [number, number, number];
  rotateY?: number;
}

export const WallGL: FunctionComponent<IWallGLProps> = ({
  position,
  rotateY,
}) => {
  const mesh = useRef(null);

  useCollisionGroup(GROUP_LAYERS.WALLS, mesh);

  return (
    <mesh ref={mesh} scale={1} position={position} rotation-y={rotateY}>
      <boxGeometry args={[0.5, WALL_HEIGHT, TILE_SIZE]} />
      <meshStandardMaterial color={"red"} />
    </mesh>
  );
};
