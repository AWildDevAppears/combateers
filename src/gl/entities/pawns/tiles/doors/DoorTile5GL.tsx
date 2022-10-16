import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile5GLProps {}

export const DoorTile5GL: FunctionComponent<IDoorTile5GLProps> = () => {
  return (
    <FloorTileGL>
      <WallGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
    </FloorTileGL>
  );
};
