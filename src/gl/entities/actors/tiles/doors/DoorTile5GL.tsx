import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { DoorGL } from "../../structures/DoorGL";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IDoorTile5GLProps extends ITileProps {}

export const DoorTile5GL: FunctionComponent<IDoorTile5GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <DoorGL position={[2.75, 0, 0]} />
      <WallGL position={[-2.75, 0, 0]} />
      <WallGL position={[0, 0, -2.75]} rotateY={Math.PI / 2} />
      {children}
    </FloorTileGL>
  );
};
