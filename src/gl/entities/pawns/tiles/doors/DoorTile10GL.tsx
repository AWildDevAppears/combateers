import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile10GLProps extends ITileProps {}

export const DoorTile10GL: FunctionComponent<IDoorTile10GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <DoorGL position={[-2.75, 0, 0]} />
      <DoorGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
    </FloorTileGL>
  );
};
