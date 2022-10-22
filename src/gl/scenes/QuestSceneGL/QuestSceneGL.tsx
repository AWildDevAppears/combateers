import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { Tilesets } from "../../../data/Tilesets";
import { TileMap } from "../../entities/pawns/tiles/TileMap";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />

      <TileMap tileset={Tilesets.Chapel1}></TileMap>
    </Canvas>
  );
};
