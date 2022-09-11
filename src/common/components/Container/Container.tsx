import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";

import style from "./Container.module.css";

interface IContainerProps {
  className?: string;
  children?: ReactNode;
}

export const Container: FunctionComponent<IContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={classNames(className, style.base)} {...props}>
      {children}
    </div>
  );
};
