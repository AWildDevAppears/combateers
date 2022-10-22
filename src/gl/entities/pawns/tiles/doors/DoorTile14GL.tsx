import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile14GLProps extends ITileProps {}

export const DoorTile14GL: FunctionComponent<IDoorTile14GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
    </FloorTileGL>
  );
};
