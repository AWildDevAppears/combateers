import { CuboidCollider } from "@react-three/rapier";
import React, { FunctionComponent, useRef } from "react";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { WALL_HEIGHT } from "../../../../../constants";
import { IStructureProps } from "../../../../../data/Structures";

interface IPillarGLProps extends IStructureProps {}

export const PillarGL: FunctionComponent<IPillarGLProps> = ({
  position,
  rotateY,
}) => {
  const geo = useRef<[number, number, number]>([0.4, WALL_HEIGHT, 0.4]);
  const pos = useRelativeTilePosition(geo.current, position);

  return (
    <CuboidCollider
      args={[geo.current[0] / 2, geo.current[1] / 2, geo.current[2] / 2]}
    >
      <mesh position={pos} rotation-y={rotateY}>
        <boxGeometry args={geo.current} />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
    </CuboidCollider>
  );
};
