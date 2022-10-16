import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile3GLProps {}

export const DoorTile3GL: FunctionComponent<IDoorTile3GLProps> = () => {
  return (
    <FloorTileGL>
      <DoorGL position={[2.75, 0, 0]} />
      <WallGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
    </FloorTileGL>
  );
};
