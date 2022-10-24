import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { IdlePlayerGL } from "../../entities/actors/models/IdlePlayer";
import { PawnGL } from "../../entities/pawn/PawnGL";
import { Scene } from "../Scene/Scene";

interface ICharacterTurnaroundSceneGLProps {}

export const CharacterTurnaroundSceneGL: FunctionComponent<
  ICharacterTurnaroundSceneGLProps
> = () => {
  return (
    <Scene>
      <ambientLight />

      <IdlePlayerGL />
    </Scene>
  );
};
