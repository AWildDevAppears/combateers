import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile8GLProps {}

export const DoorTile8GL: FunctionComponent<IDoorTile8GLProps> = () => (
  <FloorTileGL>
    <WallGL position={[2.75, 0, 0]} />
    <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
    <WallGL position={[-2.75, 0, 0]} />
    <WallGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
  </FloorTileGL>
);
