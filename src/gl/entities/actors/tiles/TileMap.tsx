import { Plane } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import React, {
  FunctionComponent,
  ReactNode,
  useCallback,
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
  onGetPlayerSpawn: (spawnPos: [number, number, number]) => void;
  children: ReactNode;
}

const TILE_OFFSET = 6;

/**
 * Take an array of tile identifiers, create their tiles and plot them out on a grid.
 * Once we have our tileset, apply a single plane to the bottom of it to act as the ground.
 */
export const TileMap: FunctionComponent<ITileMapProps> = ({
  tileset,
  onGetPlayerSpawn,
  children,
}) => {
  const maxTiles = useRef(0);
  const [tiles, setTiles] = useState<Array<ReactNode>>([]);
  const [floorSize, setFloorSize] = useState<[number, number, number]>();
  const [floorPos, setFloorPos] = useState<[number, number, number]>();

  const currentRow = useRef<number>(0);
  const currentCol = useRef<number>(0);

  const createStructs = useCallback((structWithPos: string, idx: number) => {
    const [struct, pos, rot] = structWithPos.split("-");

    if (struct === "E") {
      // We found the players spawn, return it so we can drop the player into the right place.
      onGetPlayerSpawn([
        currentRow.current * TILE_OFFSET - TILE_OFFSET,
        0,
        currentCol.current * TILE_OFFSET - TILE_OFFSET,
      ]);
    }

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
  }, []);

  const mapTiles = useCallback((tileHash: string, idx: number): ReactNode => {
    const [tileID, rPos, structures] = tileHash.toUpperCase().split(":");
    currentCol.current = idx + 1;

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
      <FloorTileGL
        key={idx}
        position={[TILE_OFFSET * idx, 0, 0]}
        rotateY={position}
      />
    );
  }, []);

  const mapRow = useCallback((tileRow: Array<string>, idx: number) => {
    maxTiles.current = Math.max(tileRow.length, maxTiles.current);

    currentRow.current = idx + 1;
    return (
      <group key={idx} position={[0, 0, TILE_OFFSET * idx]}>
        {tileRow.map(mapTiles)}
      </group>
    );
  }, []);

  useEffect(() => {
    maxTiles.current = 0;
    setTiles(tileset.map(mapRow));
    const floorWidth = tileset.length * TILE_OFFSET;
    const floorHeight = maxTiles.current * TILE_OFFSET;

    setFloorSize([floorHeight, 0.5, floorWidth]);

    // Position should be the exact middle of all of the tiles we are creating
    setFloorPos([
      floorHeight / 2 - TILE_OFFSET / 2,
      0,
      floorWidth / 2 - TILE_OFFSET / 2,
    ]);
  }, [tileset]);

  return (
    <group position={[0, 0, 0]}>
      {tiles}
      {floorPos && floorSize && (
        <GroundGL position={floorPos} size={floorSize} />
      )}
      {children}
    </group>
  );
};
