import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile2GLProps {}

export const DoorTile2GL: FunctionComponent<IDoorTile2GLProps> = () => {
  return (
    <FloorTileGL>
      <DoorGL position={[2.75, 0, 0]} />
      <WallGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
