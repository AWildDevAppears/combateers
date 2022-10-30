import { UilHardHat, UilX } from "@iconscout/react-unicons";
import classNames from "classnames";
import React, { FunctionComponent, useState } from "react";

import style from "./EquipmentCube.module.css";

interface IEquipmentCubeProps {
  slot?: "helmet" | "torso" | "legs" | "feet" | "weapon" | "accessory" | "any";
  asset?: string;
  isActive?: boolean;
  onActiveChange?: () => void;
  className?: string;
}

const iconMap = {
  helmet: <UilHardHat width="100%" height="100%" />,
  torso: <UilHardHat width="100%" height="100%" />,
  legs: <UilHardHat width="100%" height="100%" />,
  feet: <UilHardHat width="100%" height="100%" />,
  weapon: <UilHardHat width="100%" height="100%" />,
  accessory: <UilHardHat width="100%" height="100%" />,
  any: <UilX width="100%" height="100%" />,
};

export const EquipmentCube: FunctionComponent<IEquipmentCubeProps> = ({
  asset,
  slot = "any",
  isActive,
  onActiveChange,
  className,
}) => {
  return (
    <button
      onClick={onActiveChange}
      className={classNames(style.base, className, {
        [style.active]: isActive,
      })}
    >
      {!asset && iconMap[slot]}
    </button>
  );
};
