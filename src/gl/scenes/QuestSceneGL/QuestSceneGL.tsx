import { OrbitControls } from "@react-three/drei";
import React, {
  FunctionComponent,
  useContext,
  useEffect,
  useState,
} from "react";
import { ContainerInventory } from "../../../common/gameUI/ContainerInventory/ContainerInventory";
import { Tilesets } from "../../../data/Tilesets";
import { TileMap } from "../../entities/actors/tiles/TileMap";
import { PawnGL } from "../../entities/pawn/PawnGL";
import { QuestContext } from "../../logistics/quest/QuestProviderGL/QuestProviderGL";
import { MasterScene } from "../MasterScene/MasterScene";

interface IQuestSceneGLProps {}

export const QuestSceneGL: FunctionComponent<IQuestSceneGLProps> = () => {
  const ctx = useContext(QuestContext);
  const [playerPos, setPlayerPosition] = useState<[number, number, number]>();

  useEffect(() => {
    ctx.generateNewMap();
  }, []);

  return (
    <>
      <ContainerInventory isOpen={ctx.currentOverlay === "container"} />
      <MasterScene hasPhysics={true}>
        <OrbitControls />
        <ambientLight />
        <TileMap tileset={ctx.map} onGetPlayerSpawn={setPlayerPosition}>
          {playerPos && <PawnGL position={playerPos} lockIdle={false} />}
        </TileMap>
      </MasterScene>
    </>
  );
};
