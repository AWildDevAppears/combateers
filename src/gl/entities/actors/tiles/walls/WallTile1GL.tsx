import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL, FLOOR_WALL_SLOTS } from "../FloorTileGL";

interface IWallTile1GLProps extends ITileProps {}

/**
 *
 * | x x x x
 * | x x x x
 * | x x x x
 * | x x x x
 * | x x x x
 *
 */

export const WallTile1GL: FunctionComponent<IWallTile1GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={FLOOR_WALL_SLOTS[1].pos} />
      {children}
    </FloorTileGL>
  );
};
