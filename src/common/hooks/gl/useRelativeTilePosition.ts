import { Vector3 } from "@react-three/fiber";
import { useMemo } from "react";

export const WALL_HEIGHT = 2;

export const useRelativeTilePosition = (
  geo: [number, number, number],
  position: Vector3
) => {
  return useMemo(() => {
    const pos = position as [number, number, number];
    const [x, y, z] = pos;
    const [geoX, geoY, geoZ] = geo;

    // Offset 3D object based on its size in 3D space.
    // TODO: Handle rotation.
    const xPos = x === 0 ? 0 : x > 0 ? x - geoX / 2 : x + geoX / 2;
    const zPos = z === 0 ? 0 : z > 0 ? z - geoZ / 2 : z + geoZ / 2;

    return [xPos, y - (WALL_HEIGHT - geoY) / WALL_HEIGHT, zPos] as Vector3;
  }, [position, geo]);
};
