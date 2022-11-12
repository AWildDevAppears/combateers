import { OrbitControls } from "@react-three/drei";
import React, { FunctionComponent, ReactNode } from "react";

interface IObjectViewerGLProps {
  children?: ReactNode;
}

export const ObjectViewerGL: FunctionComponent<IObjectViewerGLProps> = ({
  children,
}) => {
  return (
    <group>
      {/* <OrbitControls /> */}
      <ambientLight />

      {children}
    </group>
  );
};
