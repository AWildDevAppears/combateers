import { CylinderCollider } from "@react-three/rapier";
import React, { FunctionComponent, useRef } from "react";
import { Group } from "three";
import { IStructureProps } from "../../../../../data/Structures";
import { GLTFMeshGL } from "../../../constructors/GLTFMeshGL";
import { Destructable } from "../helpers/Destructable";

interface IDummyGLProps extends IStructureProps {}

export const DummyGL: FunctionComponent<IDummyGLProps> = ({
  position,
  rotateY,
}) => {
  const mesh = useRef<Group>(null);

  const onDestroy = () => {
    // Do nothing, it's a combat dummy that can't be destroyed.
  };

  return (
    <group position={position} rotation-y={rotateY}>
      <group position={[0, -0.9, 0]}>
        <GLTFMeshGL meshName="person-male" ref={mesh} />
      </group>
      <CylinderCollider args={[0.8, 0.5]} />
      <Destructable onDestroy={onDestroy} args={[0.8, 0.5]} />
    </group>
  );
};
