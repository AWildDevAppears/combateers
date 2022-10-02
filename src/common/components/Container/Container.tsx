import classNames from "classnames";
import React, { FunctionComponent, ReactNode } from "react";

import style from "./Container.module.css";

interface IContainerProps {
  className?: string;
  children?: ReactNode;
  background?: string;
}

export const Container: FunctionComponent<IContainerProps> = ({
  children,
  className,
  background,
  ...props
}) => {
  const styleProps = background ? { backgroundImage: `url${background}` } : {};

  return (
    <div
      className={classNames(className, style.base)}
      style={styleProps}
      {...props}
    >
      {children}
    </div>
  );
};
