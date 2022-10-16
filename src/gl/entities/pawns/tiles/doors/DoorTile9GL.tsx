import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile9GLProps {}

export const DoorTile9GL: FunctionComponent<IDoorTile9GLProps> = () => {
  return (
    <FloorTileGL>
      <DoorGL position={[2.75, 0, 0]} />
      <DoorGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
