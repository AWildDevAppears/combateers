import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile7GLProps {}

export const DoorTile7GL: FunctionComponent<IDoorTile7GLProps> = () => {
  return (
    <FloorTileGL>
      <WallGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[-2.75, 0, 0]} />
      <DoorGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
    </FloorTileGL>
  );
};
