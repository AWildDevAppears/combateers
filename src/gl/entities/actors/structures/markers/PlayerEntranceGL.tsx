import React, { FunctionComponent, useEffect } from "react";
import { IStructureProps } from "../../../../../data/Structures";

interface IPlayerEntranceGLProps extends IStructureProps {}

export const PlayerEntranceGL: FunctionComponent<IPlayerEntranceGLProps> = ({
  position,
  rotateY,
}) => {
  useEffect(() => {
    // Broadcast the position and rotation.
    // Use a context or redux?
  }, []);

  return null;
};
