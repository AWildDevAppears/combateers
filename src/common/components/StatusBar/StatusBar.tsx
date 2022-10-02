import React, { FunctionComponent } from "react";

interface IStatusBarProps {
  current: number;
  max: number;
  type: "primary" | "secondary";
}

export const StatusBar: FunctionComponent<IStatusBarProps> = () => {
  return <div>...</div>;
};
