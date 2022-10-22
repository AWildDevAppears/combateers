import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

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
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={[2.75, 0, 0]} />
    </FloorTileGL>
  );
};
