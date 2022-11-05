import { OrbitControls, Torus } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { CuboidCollider, Debug, Physics, RigidBody } from "@react-three/rapier";
import React, { FunctionComponent, Suspense, useState } from "react";
import { ContainerInventory } from "../../../common/gameUI/ContainerInventory/ContainerInventory";
import { Tilesets } from "../../../data/Tilesets";
import { TileMap } from "../../entities/actors/tiles/TileMap";
import { PawnGL } from "../../entities/pawn/PawnGL";
import { CollisionProviderGL } from "../../logistics/collisions/CollisionProviderGL/CollisionProviderGL";
import { MasterScene } from "../MasterScene/MasterScene";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  const [playerPos, setPlayerPosition] = useState<[number, number, number]>();

  return (
    <>
      <ContainerInventory isOpen={false} />
      <MasterScene hasPhysics={true}>
        <OrbitControls />
        <ambientLight />
        <TileMap
          tileset={Tilesets.devRoom}
          onGetPlayerSpawn={setPlayerPosition}
        >
          {playerPos && <PawnGL position={playerPos} lockIdle={false} />}
        </TileMap>
      </MasterScene>
    </>
  );
};
