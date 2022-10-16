import React, { FunctionComponent } from "react";
import { DoorGL } from "../../structures/DoorGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile10GLProps {}

export const DoorTile10GL: FunctionComponent<IDoorTile10GLProps> = () => {
  return (
    <FloorTileGL>
      <DoorGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <DoorGL position={[-2.75, 0, 0]} />
      <DoorGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
    </FloorTileGL>
  );
};
