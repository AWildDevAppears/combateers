import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile7GLProps extends ITileProps {}

export const DoorTile7GL: FunctionComponent<IDoorTile7GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[-2.75, 0, 0]} />
      <DoorGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
      {children}
    </FloorTileGL>
  );
};
