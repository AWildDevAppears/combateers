import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL, FLOOR_WALL_SLOTS } from "../FloorTileGL";

interface IWallTile4GLProps extends ITileProps {}

/**
 * 3 walls one open side
 */
export const WallTile4GL: FunctionComponent<IWallTile4GLProps> = ({
  position,
  rotateY,
  children,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={FLOOR_WALL_SLOTS[1].pos} />
      <WallGL position={FLOOR_WALL_SLOTS[2].pos} />
      <WallGL
        position={FLOOR_WALL_SLOTS[3].pos}
        rotateY={FLOOR_WALL_SLOTS[3].rot}
      />
      {children}
    </FloorTileGL>
  );
};

export default WallTile4GL;
