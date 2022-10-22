import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL, FLOOR_WALL_SLOTS } from "../FloorTileGL";

interface IWallTile2GLProps extends ITileProps {}

/**
 * L shaped wall tile
 */
export const WallTile2GL: FunctionComponent<IWallTile2GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL
        position={FLOOR_WALL_SLOTS[3].pos}
        rotateY={FLOOR_WALL_SLOTS[3].rot}
      />
      <WallGL position={FLOOR_WALL_SLOTS[1].pos} />
      {children}
    </FloorTileGL>
  );
};
