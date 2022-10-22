import React, { FunctionComponent, useRef } from "react";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { IStructureProps } from "../../../../../data/Structures";

interface ITorchGLProps extends IStructureProps {}

export const TorchGL: FunctionComponent<ITorchGLProps> = ({
  position,
  rotateY,
}) => {
  const geo = useRef<[number, number, number]>([0.2, 1.3, 0.2]);
  const pos = useRelativeTilePosition(geo.current, position);

  // 2 - 1.3 = 0.7 / 2  = 0.35

  return (
    <mesh scale={1} position={pos} rotation-y={rotateY}>
      <boxGeometry args={geo.current} />
      <meshStandardMaterial color={"hotpink"} />
    </mesh>
  );
};
