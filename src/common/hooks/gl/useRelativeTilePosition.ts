import { Vector3 } from "@react-three/fiber";
import { useMemo } from "react";
import { WALL_HEIGHT } from "../../../constants";

export const useRelativeTilePosition = (
  geo: [number, number, number],
  position: Vector3,
  rotation: number = 0
) => {
  return useMemo(() => {
    const pos = position as [number, number, number];
    const [x, y, z] = pos;
    const [geoX, geoY, geoZ] = geo;

    // Offset 3D object based on its size in 3D space.
    const xPos = x === 0 ? 0 : x > 0 ? x - geoX / 2 : x + geoX / 2;
    const zPos = z === 0 ? 0 : z > 0 ? z - geoZ / 2 : z + geoZ / 2;

    // We're either not rotating or the object is backwards, we don't need to do anything with this.
    if (rotation === 0 || rotation === Math.PI) {
      return [xPos, y - (WALL_HEIGHT - geoY) / WALL_HEIGHT, zPos] as [
        number,
        number,
        number
      ];
    }

    // If we are rotated 90 degrees, we can just flip the X and Z value
    if (rotation === Math.PI / 2 || rotation === Math.PI + Math.PI / 2) {
      return [zPos, y - (WALL_HEIGHT - geoY) / WALL_HEIGHT, xPos] as [
        number,
        number,
        number
      ];
    }

    // TODO: Handle any other rotation.
    return [xPos, y - (WALL_HEIGHT - geoY) / WALL_HEIGHT, zPos] as [
      number,
      number,
      number
    ];
  }, [position, geo]);
};
