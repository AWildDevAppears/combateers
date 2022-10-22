import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IWallTile3GLProps extends ITileProps {}

/**
 * 2 parallel wall tile
 */
export const WallTile3GL: FunctionComponent<IWallTile3GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={[2.75, 0, 0]} />
      <WallGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
