import { CuboidCollider } from "@react-three/rapier";
import React, { FunctionComponent, useRef } from "react";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { WALL_HEIGHT } from "../../../../../constants";
import { IStructureProps } from "../../../../../data/Structures";

interface ITorchGLProps extends IStructureProps {}

export const TorchGL: FunctionComponent<ITorchGLProps> = ({
  position,
  rotateY,
}) => {
  const geo = useRef<[number, number, number]>([0.2, WALL_HEIGHT * 0.5, 0.2]);
  const pos = useRelativeTilePosition(geo.current, position);

  return (
    <CuboidCollider
      args={[
        geo.current[0] / 2,
        geo.current[1] / WALL_HEIGHT,
        geo.current[2] / 2,
      ]}
    >
      <mesh scale={1} position={pos} rotation-y={rotateY}>
        <boxGeometry args={geo.current} />
        <meshStandardMaterial color={"hotpink"} />
      </mesh>
    </CuboidCollider>
  );
};
