import { Vector3 } from "@react-three/fiber";
import { FunctionComponent } from "react";

// TODO: consider lazy loading these.
import { PillarGL } from "../gl/entities/pawns/structures/clutter/PillarGL";

export interface IStructureProps {
  position: Vector3;
}

export interface IStructure extends FunctionComponent<IStructureProps> {}

export const StructurePositions: { [key: string]: Vector3 } = {
  P1: [0, 0, 0],
};

export const Structures: { [key: string]: IStructure } = {
  S1: PillarGL,
};
