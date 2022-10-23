import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { Tilesets } from "../../../data/Tilesets";
import { TileMap } from "../../entities/actors/tiles/TileMap";
import { PawnGL } from "../../entities/pawn/PawnGL";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />
      <Physics>
        <TileMap tileset={Tilesets.devRoom}></TileMap>
        <PawnGL position={[1, 1, 1]} lockIdle={false} />
      </Physics>
    </Canvas>
  );
};
