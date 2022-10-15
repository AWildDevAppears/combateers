import { Canvas } from "@react-three/fiber";
import React, { FunctionComponent, ReactNode } from "react";

import style from "./Scene.module.css";

interface ISceneProps {
  children?: ReactNode;
}

export const Scene: FunctionComponent<ISceneProps> = ({ children }) => {
  return (
    <div className={style.base}>
      <Canvas>{children}</Canvas>
    </div>
  );
};
