import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { DoorTile1GL } from "../../entities/pawns/tiles/doors/DoorTile1GL";
import { DoorTile2GL } from "../../entities/pawns/tiles/doors/DoorTile2GL";
import { DoorTile3GL } from "../../entities/pawns/tiles/doors/DoorTile3GL";
import { DoorTile4GL } from "../../entities/pawns/tiles/doors/DoorTile4GL";
import { DoorTile5GL } from "../../entities/pawns/tiles/doors/DoorTile5GL";
import { DoorTile6GL } from "../../entities/pawns/tiles/doors/DoorTile6GL";
import { DoorTile7GL } from "../../entities/pawns/tiles/doors/DoorTile7GL";
import { DoorTile8GL } from "../../entities/pawns/tiles/doors/DoorTile8GL";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  return (
    <Canvas>
      <OrbitControls />
      <ambientLight />

      <DoorTile8GL />
    </Canvas>
  );
};
