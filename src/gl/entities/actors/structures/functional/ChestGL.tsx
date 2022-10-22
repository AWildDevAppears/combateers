import { Vector3 } from "@react-three/fiber";
import React, { FunctionComponent, useMemo, useRef } from "react";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { IStructureProps } from "../../../../../data/Structures";

interface IChestGLProps extends IStructureProps {}

export const ChestGL: FunctionComponent<IChestGLProps> = ({
  position,
  rotateY,
}) => {
  const geo = useRef<[number, number, number]>([1, 0.4, 0.4]);
  const pos = useRelativeTilePosition(geo.current, position);

  return (
    <mesh scale={1} position={pos} rotation-y={rotateY}>
      <boxGeometry args={geo.current} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};
