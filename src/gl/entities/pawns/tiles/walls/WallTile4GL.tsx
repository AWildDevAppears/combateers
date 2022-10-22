import React, { FunctionComponent } from "react";
import { ITileProps } from "../../../../../data/Tiles";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IWallTile4GLProps extends ITileProps {}

/**
 * 3 walls one open side
 */
export const WallTile4GL: FunctionComponent<IWallTile4GLProps> = ({
  position,
  rotateY,
}) => {
  return (
    <FloorTileGL position={position} rotateY={rotateY}>
      <WallGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[2.75, 0, 0]} />
      <WallGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
