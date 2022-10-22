import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile16GLProps extends ITileProps {}

export const DoorTile16GL: FunctionComponent<IDoorTile16GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
      <DoorGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[-2.75, 0, 0]} />
      {children}
    </FloorTileGL>
  );
};
