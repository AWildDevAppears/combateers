import React, { FunctionComponent, useRef } from "react";
import { Group } from "three";
import { DamageSphere } from "../../actors/structures/helpers/DamageSphere";
import { GLTFMeshGL } from "../../constructors/GLTFMeshGL";

interface IWeaponSlotProps {}

export const WeaponSlot: FunctionComponent<IWeaponSlotProps> = () => {
  const mesh = useRef<Group>(null);
  return (
    <group scale={0.05} position={[1, 1.2, 0]} rotation-y={Math.PI}>
      <GLTFMeshGL meshName="sword" ref={mesh} />
    </group>
  );
};
