import React, { FunctionComponent, useRef } from "react";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { IStructureProps } from "../../../../../data/Structures";

interface IPillarGLProps extends IStructureProps {}

export const PillarGL: FunctionComponent<IPillarGLProps> = ({
  position,
  rotateY,
}) => {
  const geo = useRef<[number, number, number]>([0.4, 2, 0.4]);
  const pos = useRelativeTilePosition(geo.current, position);

  return (
    <mesh scale={1} position={pos} rotation-y={rotateY}>
      <boxGeometry args={geo.current} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};
