import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { DoorTile3GL } from "../../entities/pawns/tiles/DoorTile3GL";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />

      <DoorTile3GL />
    </Canvas>
  );
};
