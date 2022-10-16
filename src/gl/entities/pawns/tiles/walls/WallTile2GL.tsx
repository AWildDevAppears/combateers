import React, { FunctionComponent } from "react";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IWallTile2GLProps {}
/**
 *
 * | x x x |
 * | x x x |
 * | x x x |
 * | x x x |
 * | x x x |
 *
 */

export const WallTile2GL: FunctionComponent<IWallTile2GLProps> = () => {
  return (
    <FloorTileGL>
      <WallGL position={[2.75, 0, 0]} />
      <WallGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
