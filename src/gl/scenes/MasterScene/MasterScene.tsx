import { Canvas } from "@react-three/fiber";
import { Debug, Physics } from "@react-three/rapier";

import React, {
  FunctionComponent,
  ReactNode,
  Suspense,
  useEffect,
  useRef,
} from "react";
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
  const canvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvas.current) return;
    canvas.current.requestPointerLock();

    document.addEventListener("pointerLockChange", () => {
      if (!document.pointerLockElement) {
        canvas.current?.requestPointerLock();
      }
    });

    canvas.current.addEventListener("click", () => {
      if (!document.pointerLockElement) {
        canvas.current?.requestPointerLock();
      }
    });
  }, [canvas]);

  return (
    <div className={style.base}>
      <DeveloperOverlay>
        <Canvas ref={canvas}>
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
