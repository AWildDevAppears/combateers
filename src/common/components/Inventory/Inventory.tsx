import React, { FunctionComponent, useMemo, useState } from "react";
import { IItem } from "../../../data/Items";
import { EquipmentCube } from "../EquipmentCube/EquipmentCube";

import style from "./Inventory.module.css";

interface IInventoryProps {
  size: number;
  items: IItem[];
}

export const Inventory: FunctionComponent<IInventoryProps> = ({
  size,
  items,
}) => {
  const [selectedItem, setSelectedItem] = useState(-1);

  const itemCells = useMemo(() => {
    const itemArray = new Array(size).fill({});

    items.forEach((item, idx) => {
      itemArray[idx] = item;
    });

    return itemArray;
  }, [items]);

  return (
    <div className={style.base}>
      {itemCells.map((item, idx) => (
        <EquipmentCube
          key={idx}
          isActive={selectedItem === idx}
          onActiveChange={() => setSelectedItem(idx)}
        />
      ))}
    </div>
  );
};
