import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, {
  FunctionComponent,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  StructurePositions,
  StructureRotations,
  Structures,
} from "../../../../data/Structures";
import { RotationPositions, Tiles } from "../../../../data/Tiles";
import { FloorTileGL } from "./FloorTileGL";
import { GroundGL } from "./GroundGL";

interface ITileMapProps {
  tileset: Array<Array<string>>;
}

const TILE_OFFSET = 6;

const createStructs = (structWithPos: string, idx: number) => {
  const [struct, pos, rot] = structWithPos.split("-");

  const position = Reflect.has(StructurePositions, pos)
    ? StructurePositions[pos]
    : StructurePositions.P1;

  // Allow objects to be rotated to fixed angles
  const rotation = Reflect.has(StructureRotations, rot)
    ? StructureRotations[rot]
    : StructureRotations.R1;

  if (Reflect.has(Structures, struct)) {
    const Component = Structures[struct];
    return <Component key={idx} position={position} rotateY={rotation} />;
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
      <Component
        key={idx}
        position={[TILE_OFFSET * idx, 0, 0]}
        rotateY={position}
      >
        {injectableStructures}
      </Component>
    );
  }

  return (
    <FloorTileGL position={[TILE_OFFSET * idx, 0, 0]} rotateY={position} />
  );
};

/**
 * Take an array of tile identifiers, create their tiles and plot them out on a grid.
 * Once we have our tileset, apply a single plane to the bottom of it to act as the ground.
 */
export const TileMap: FunctionComponent<ITileMapProps> = ({ tileset }) => {
  const maxTiles = useRef(0);

  const mapRow = (tileRow: Array<string>, idx: number) => {
    maxTiles.current = Math.max(tileRow.length, maxTiles.current);
    return (
      <group key={idx} position={[0, 0, TILE_OFFSET * idx]}>
        {tileRow.map(mapTiles)}
      </group>
    );
  };

  const tiles = useMemo(() => tileset.map(mapRow), [tileset]);
  const [floorSize, setFloorSize] = useState<[number, number]>();
  const [floorPos, setFloorPos] = useState<[number, number, number]>();

  useEffect(() => {
    const floorWidth = tileset.length * TILE_OFFSET;
    const floorHeight = maxTiles.current * TILE_OFFSET;

    setFloorSize([floorHeight, floorWidth]);
    setFloorPos([floorWidth / 2 - TILE_OFFSET, 0, floorHeight / 2]);
  }, [tiles]);

  if (!floorSize) return null;

  return (
    <group>
      {tiles}
      <GroundGL position={floorPos || [0, 0, 0]} size={floorSize} />
    </group>
  );
};
