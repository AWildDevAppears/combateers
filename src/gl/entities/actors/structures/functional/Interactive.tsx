import { BallCollider } from "@react-three/rapier";
import React, { FunctionComponent, ReactNode } from "react";
import { Mesh } from "three";
import { useInteractive } from "../../../../../common/hooks/gl/useInteractive";

interface IInteractiveProps {
  pos: [number, number, number];
  rotateY: number;
  size: number;
  mesh?: Mesh;
  children?: ReactNode;
}

export const Interactive: FunctionComponent<IInteractiveProps> = ({
  pos,
  rotateY,
  size,
  mesh,
  children,
}) => {
  const { onEnterInteract, onLeaveInteract } = useInteractive(mesh?.uuid);

  return (
    <BallCollider
      position={pos}
      rotation={[0, rotateY, 0]}
      args={[size]}
      sensor
      onIntersectionEnter={onEnterInteract}
      onIntersectionExit={onLeaveInteract}
    >
      {children}
    </BallCollider>
  );
};
