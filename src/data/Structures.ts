import { Vector3 } from "@react-three/fiber";
import { FunctionComponent } from "react";

// TODO: consider lazy loading these.
import { PillarGL } from "../gl/entities/pawns/structures/clutter/PillarGL";
import { TorchGL } from "../gl/entities/pawns/structures/clutter/TorchGL";
import { ChestGL } from "../gl/entities/pawns/structures/functional/ChestGL";
import { FLOOR_MAX, FLOOR_MIN } from "../gl/entities/pawns/tiles/FloorTileGL";

export interface IStructureProps {
  position: Vector3;
}

const WALL_THICKNESS = 0.5;
const STRUCT_MAX = FLOOR_MAX - WALL_THICKNESS;
const STRUCT_MIN = FLOOR_MIN + WALL_THICKNESS;

export interface IStructure extends FunctionComponent<IStructureProps> {}

export const StructurePositions: { [key: string]: Vector3 } = {
  P1: [0, 0, 0], // Middle
  P2: [STRUCT_MIN, 0, STRUCT_MIN], // Top corner
  P3: [STRUCT_MAX, 0, STRUCT_MIN], // Other top corner
  P4: [0, 0, STRUCT_MIN], // Top middle
  P5: [STRUCT_MIN, 0, STRUCT_MAX], // Bottom corner
  P6: [STRUCT_MAX, 0, STRUCT_MAX], // Other bottom corner
  P7: [0, 0, STRUCT_MAX], // Other bottom corner
  P8: [STRUCT_MIN, 0, 0], // Left middle
  P9: [STRUCT_MAX, 0, 0], // Right middle
};

export const Structures: { [key: string]: IStructure } = {
  S1: PillarGL,
  S2: TorchGL,
  S3: ChestGL,
};
