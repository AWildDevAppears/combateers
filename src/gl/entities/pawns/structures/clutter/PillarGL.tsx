import React, { FunctionComponent } from "react";
import { IStructureProps } from "../../../../../data/Structures";

interface IPillarGLProps extends IStructureProps {}

export const PillarGL: FunctionComponent<IPillarGLProps> = ({ position }) => {
  return (
    <mesh scale={1} position={position}>
      <boxGeometry args={[0.4, 2, 0.4]} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};
