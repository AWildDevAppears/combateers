import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile1GLProps {}

export const DoorTile1GL: FunctionComponent<IDoorTile1GLProps> = () => {
  return (
    <FloorTileGL>
      <DoorGL position={[2.75, 0, 0]} />
    </FloorTileGL>
  );
};
