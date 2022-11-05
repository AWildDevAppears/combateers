import { Vector3 } from "@react-three/fiber";
import { BallCollider, CuboidCollider } from "@react-three/rapier";
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

  const onEnterInteract = (e: any) => {
    console.log(e, "can interact");
  };

  const onLeaveInteract = (e: any) => {};

  return (
    <BallCollider
      position={pos}
      rotation={[0, rotateY, 0]}
      args={[1.5]}
      sensor
      onIntersectionEnter={onEnterInteract}
      onIntersectionExit={onLeaveInteract}
    >
      <CuboidCollider
        position={[0, 0, 0]}
        args={[geo.current[0] / 2, geo.current[1] / 2, geo.current[2] / 2]}
      >
        <mesh scale={1}>
          <boxGeometry args={geo.current} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      </CuboidCollider>
    </BallCollider>
  );
};
