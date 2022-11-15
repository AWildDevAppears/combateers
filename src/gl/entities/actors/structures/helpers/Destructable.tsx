import { CylinderCollider } from "@react-three/rapier";
import React, { FunctionComponent } from "react";
import { CollisionGroups } from "../../../../../constants";

interface IDestructableProps {
  args: [number, number];
  onDestroy: () => void;
}

export const Destructable: FunctionComponent<IDestructableProps> = ({
  args,
}) => {
  const onAttackHit = () => {};

  return <CylinderCollider args={args} sensor onCollisionEnter={onAttackHit} />;
};
