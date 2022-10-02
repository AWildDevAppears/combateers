import React, { FunctionComponent } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Container } from "../../../common/components/Container/Container";
import { Pawn } from "../../../common/entities/pawns/Pawn";

interface IActiveQuestProps {}

export const ActiveQuest: FunctionComponent<IActiveQuestProps> = () => {
  return (
    <Container>
      <Canvas>
        <OrbitControls />
        <ambientLight />

        <Pawn />
      </Canvas>
    </Container>
  );
};
