import { CuboidCollider } from "@react-three/rapier";
import React, { FunctionComponent, useEffect, useRef, useState } from "react";
import { Group, Mesh } from "three";
import { useRelativeTilePosition } from "../../../../../common/hooks/gl/useRelativeTilePosition";
import { IStructureProps } from "../../../../../data/Structures";
import { Interactive } from "../helpers/Interactive";

interface IChestGLProps extends IStructureProps {}

export const ChestGL: FunctionComponent<IChestGLProps> = ({
  position,
  rotateY,
}) => {
  const mesh = useRef<Group>(null);
  const geo = useRef<[number, number, number]>([1.4, 0.6, 0.6]);
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
      mesh={mesh.current as Group}
      type="container"
    >
      <CuboidCollider
        position={[0, 0, 0]}
        args={[geo.current[0] / 2, geo.current[1] / 2, geo.current[2] / 2]}
      >
        <group ref={mesh}>
          <mesh scale={1}>
            <boxGeometry args={geo.current} />
            <meshStandardMaterial color={"hotpink"} />
          </mesh>
        </group>
      </CuboidCollider>
    </Interactive>
  );
};
