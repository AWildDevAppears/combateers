import React, { FunctionComponent, useContext } from "react";
import { QuestContext } from "../../../gl/logistics/quest/QuestProviderGL/QuestProviderGL";
import { Container } from "../../components/Container/Container";
import { Inventory } from "../../components/Inventory/Inventory";

import style from "./ContainerInventory.module.css";

interface IContainerInventoryProps {
  isOpen: boolean;
}

export const ContainerInventory: FunctionComponent<
  IContainerInventoryProps
> = ({ isOpen }) => {
  const { endInteraction } = useContext(QuestContext);
  return (
    <div>
      {isOpen && (
        <div className={style.base}>
          <Container>
            <Inventory size={12} items={[]} />

            <button onClick={endInteraction}>Close</button>
          </Container>
        </div>
      )}
    </div>
  );
};
