import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile9GLProps extends ITileProps {}

export const DoorTile9GL: FunctionComponent<IDoorTile9GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
      <DoorGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
