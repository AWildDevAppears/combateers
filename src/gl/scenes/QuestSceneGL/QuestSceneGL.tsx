import { OrbitControls } from "@react-three/drei";
import React, { FunctionComponent, useState } from "react";
import { ContainerInventory } from "../../../common/gameUI/ContainerInventory/ContainerInventory";
import { Tilesets } from "../../../data/Tilesets";
import { TileMap } from "../../entities/actors/tiles/TileMap";
import { PawnGL } from "../../entities/pawn/PawnGL";
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
