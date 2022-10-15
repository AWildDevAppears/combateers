import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { Pawn } from "../../entities/pawns/Pawn";
import { Scene } from "../Scene/Scene";

interface ICharacterTurnaroundSceneGLProps {}

export const CharacterTurnaroundSceneGL: FunctionComponent<
  ICharacterTurnaroundSceneGLProps
> = () => {
  return (
    <Scene>
      <ambientLight />

      <Pawn />
    </Scene>
  );
};
