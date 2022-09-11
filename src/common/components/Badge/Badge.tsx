import React, { FunctionComponent, ReactNode } from "react";

import style from "./Badge.module.css";

interface IBadgeProps {
  children?: ReactNode;
}

export const Badge: FunctionComponent<IBadgeProps> = ({ children }) => {
  return <li className={style.base}>{children}</li>;
};
