import React, { FunctionComponent, ReactNode, useMemo } from "react";
import { RotationPositions, Tiles } from "../../../../data/Tiles";
import { FloorTileGL } from "./FloorTileGL";

interface ITileMapProps {
  tileset: Array<Array<string>>;
}

const TILE_OFFSET = 6;

const mapTiles = (tileHash: string, idx: number): ReactNode => {
  const [tileID, rPos] = tileHash.toUpperCase().split(":");

  const position = Reflect.has(RotationPositions, rPos)
    ? RotationPositions[rPos]
    : RotationPositions.P1;

  if (Reflect.has(Tiles, tileID)) {
    const Component = Tiles[tileID];
    return (
      <Component position={[TILE_OFFSET * idx, 0, 0]} rotateY={position} />
    );
  }

  return (
    <FloorTileGL position={[TILE_OFFSET * idx, 0, 0]} rotateY={position} />
  );
};

const mapRow = (tileRow: Array<string>, idx: number) => (
  <group position={[0, 0, TILE_OFFSET * idx]}>{tileRow.map(mapTiles)}</group>
);

/**
 * Take an array of tile identifiers, create their tiles and plot them out on a grid.
 */
export const TileMap: FunctionComponent<ITileMapProps> = ({ tileset }) => {
  const tiles = useMemo(() => tileset.map(mapRow), [tileset]);

  return <group>{tiles}</group>;
};
