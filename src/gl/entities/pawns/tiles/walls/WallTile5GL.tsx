import React, { FunctionComponent } from "react";
import { WallGL } from "../../structures/WallGL";
import { FloorTileGL } from "../FloorTileGL";

interface IWallTile5GLProps {}

export const WallTile5GL: FunctionComponent<IWallTile5GLProps> = () => {
  return (
    <FloorTileGL>
      <WallGL position={[0, 0, 2.75]} rotateY={Math.PI / 2} />
      <WallGL position={[2.75, 0, 0]} />
      <WallGL position={[-2.75, 0, 0]} />
    </FloorTileGL>
  );
};
