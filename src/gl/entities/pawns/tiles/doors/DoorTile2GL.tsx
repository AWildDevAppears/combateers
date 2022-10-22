import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile2GLProps extends ITileProps {}

export const DoorTile2GL: FunctionComponent<IDoorTile2GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
      <WallGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      {children}
    </FloorTileGL>
  );
};
