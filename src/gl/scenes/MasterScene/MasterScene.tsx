import { Canvas } from "@react-three/fiber";
import { Debug, Physics } from "@react-three/rapier";

import React, { FunctionComponent, ReactNode, Suspense } from "react";
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
      <DeveloperOverlay>
        <Canvas>
          <Suspense>
            {hasPhysics && (
              <Physics>
                {children}
                <Debug />
              </Physics>
            )}
            {!hasPhysics && children}
          </Suspense>
        </Canvas>
      </DeveloperOverlay>
    </div>
  );
};
