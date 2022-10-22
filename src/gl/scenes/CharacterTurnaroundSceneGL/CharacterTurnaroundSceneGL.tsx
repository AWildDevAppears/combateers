import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { PawnGL } from "../../entities/actors/PawnGL";
import { Scene } from "../Scene/Scene";

interface ICharacterTurnaroundSceneGLProps {}

export const CharacterTurnaroundSceneGL: FunctionComponent<
  ICharacterTurnaroundSceneGLProps
> = () => {
  return (
    <Scene>
      <ambientLight />

      <PawnGL />
    </Scene>
  );
};
