import { Vector3 } from "@react-three/fiber";
import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile1GLProps extends ITileProps {}

export const DoorTile1GL: FunctionComponent<IDoorTile1GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
    </FloorTileGL>
  );
};
