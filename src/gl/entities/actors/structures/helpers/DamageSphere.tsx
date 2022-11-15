import { BallCollider } from "@react-three/rapier";
import React, { FunctionComponent } from "react";
import { CollisionGroups } from "../../../../../constants";

interface IDamageSphereProps {
  position: [number, number, number];
}

export const DamageSphere: FunctionComponent<IDamageSphereProps> = ({
  position,
}) => {
  return (
    <BallCollider
      args={[0.5]}
      collisionGroups={CollisionGroups.WEAPON}
      sensor
      position={position}
    />
  );
};
