import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IWallTile2GLProps extends ITileProps {}

/**
 * L shaped wall tile
 */
export const WallTile2GL: FunctionComponent<IWallTile2GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[2.75, 0, 0]} />
    </FloorTileGL>
  );
};
