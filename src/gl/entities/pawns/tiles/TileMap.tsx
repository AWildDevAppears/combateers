import React, { FunctionComponent, ReactNode, useMemo } from "react";
import { StructurePositions, Structures } from "../../../../data/Structures";
import { RotationPositions, Tiles } from "../../../../data/Tiles";
import { FloorTileGL } from "./FloorTileGL";

interface ITileMapProps {
  tileset: Array<Array<string>>;
}

const TILE_OFFSET = 6;

const createStructs = (structWithPos: string) => {
  const [struct, pos] = structWithPos.split("-");

  const position = Reflect.has(StructurePositions, pos)
    ? StructurePositions[pos]
    : StructurePositions.P1;

  if (Reflect.has(Structures, struct)) {
    const Component = Structures[struct];
    return <Component position={position} />;
  }
};

const mapTiles = (tileHash: string, idx: number): ReactNode => {
  const [tileID, rPos, structures] = tileHash.toUpperCase().split(":");

  const injectableStructures = structures?.split(",").map(createStructs);

  const position = Reflect.has(RotationPositions, rPos)
    ? RotationPositions[rPos]
    : RotationPositions.P1;

  if (Reflect.has(Tiles, tileID)) {
    const Component = Tiles[tileID];
    return (
      <Component position={[TILE_OFFSET * idx, 0, 0]} rotateY={position}>
        {injectableStructures}
      </Component>
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
