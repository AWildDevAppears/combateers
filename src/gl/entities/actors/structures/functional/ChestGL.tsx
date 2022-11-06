import { CuboidCollider } from "@react-three/rapier";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Mesh } from "three";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { IStructureProps } from "../../../../../data/Structures";
import { Interactive } from "./Interactive";

interface IChestGLProps extends IStructureProps {}

export const ChestGL: FunctionComponent<IChestGLProps> = ({
  position,
  rotateY,
}) => {
  const mesh = useRef<Mesh>(null);
  const geo = useRef<[number, number, number]>([1, 0.4, 0.4]);
  const pos = useRelativeTilePosition(geo.current, position);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!mesh.current || isReady) return;

    setIsReady(true);
  }, [mesh.current]);

  return (
    <Interactive
      pos={pos}
      rotateY={rotateY}
      size={1.5}
      mesh={mesh.current as Mesh}
      type="container"
    >
      <CuboidCollider
        position={[0, 0, 0]}
        args={[geo.current[0] / 2, geo.current[1] / 2, geo.current[2] / 2]}
      >
        <mesh scale={1} ref={mesh}>
          <boxGeometry args={geo.current} />
          <meshStandardMaterial color={"hotpink"} />
        </mesh>
      </CuboidCollider>
    </Interactive>
  );
};
