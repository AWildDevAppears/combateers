import React, { FunctionComponent } from "react";
import { Container } from "../../components/Container/Container";
import { Inventory } from "../../components/Inventory/Inventory";

import style from "./ContainerInventory.module.css";

interface IContainerInventoryProps {
  isOpen: boolean;
}

export const ContainerInventory: FunctionComponent<
  IContainerInventoryProps
> = ({ isOpen }) => {
  return (
    <div>
      {isOpen && (
        <div className={style.base}>
          <Container>
            <Inventory size={12} items={[]} />
          </Container>
        </div>
      )}
    </div>
  );
};
