import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL, FLOOR_WALL_SLOTS } from "../FloorTileGL";

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
      <WallGL position={FLOOR_WALL_SLOTS[1].pos} />
      <WallGL position={FLOOR_WALL_SLOTS[2].pos} />
    </FloorTileGL>
  );
};
