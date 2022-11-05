import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";

import React, { FunctionComponent, ReactNode } from "react";
import { DeveloperOverlay } from "../../../common/gameUI/DeveloperOverlay/DeveloperOverlay";

import style from "./MasterScene.module.css";

interface IMasterSceneProps {
  hasPhysics?: boolean;
  children?: ReactNode;
}

export const MasterScene: FunctionComponent<IMasterSceneProps> = ({
  hasPhysics = false,
  children,
}) => {
  return (
    <div className={style.base}>
      <DeveloperOverlay />
      <Canvas>
        {hasPhysics && <Physics>{children}</Physics>}
        {children}
      </Canvas>
    </div>
  );
};
