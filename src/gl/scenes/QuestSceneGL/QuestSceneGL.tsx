import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { Pawn } from "../../entities/pawns/Pawn";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />

      <Pawn />
    </Canvas>
  );
};
