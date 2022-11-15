import { BallCollider } from "@react-three/rapier";
import React, { FunctionComponent, ReactNode } from "react";
import { Group, Mesh } from "three";
import { useInteractive } from "../../../../../common/hooks/gl/useInteractive";
import { InteractableType } from "../../../../logistics/quest/QuestProviderGL/QuestProviderGL";

interface IInteractiveProps {
  pos: [number, number, number];
  rotateY: number;
  size: number;
  mesh?: Mesh | Group;
  type: InteractableType;
  children?: ReactNode;
}

export const Interactive: FunctionComponent<IInteractiveProps> = ({
  pos,
  rotateY,
  size,
  mesh,
  type,
  children,
}) => {
  const { onEnterInteract, onLeaveInteract } = useInteractive(type, mesh?.uuid);

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
