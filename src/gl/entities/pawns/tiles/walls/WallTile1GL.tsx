import React, { FunctionComponent } from "react";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IWallTile1GLProps {}

/**
 *
 * | x x x x
 * | x x x x
 * | x x x x
 * | x x x x
 * | x x x x
 *
 */

export const WallTile1GL: FunctionComponent<IWallTile1GLProps> = () => {
  return (
    <FloorTileGL>
      <WallGL position={[2.75, 0, 0]} />
    </FloorTileGL>
  );
};
