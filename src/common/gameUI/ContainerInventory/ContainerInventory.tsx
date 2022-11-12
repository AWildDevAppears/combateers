import React, { FunctionComponent, useContext, useEffect } from "react";
import { IItem } from "../../../data/Items";
import { QuestContext } from "../../../gl/logistics/quest/QuestProviderGL/QuestProviderGL";
import { Container } from "../../components/Container/Container";
import { Inventory } from "../../components/Inventory/Inventory";
import { InputContext } from "../../services/input/InputProvider";

import style from "./ContainerInventory.module.css";

interface IContainerInventoryProps {
  isOpen: boolean;
  items?: IItem[];
}

export const ContainerInventory: FunctionComponent<
  IContainerInventoryProps
> = ({ isOpen, items = [] }) => {
  const { endInteraction } = useContext(QuestContext);
  const { negative } = useContext(InputContext).inputs;

  useEffect(() => {
    if (!isOpen) return;

    if (negative) {
      endInteraction();
    }
  }, [isOpen, negative]);

  return (
    <div>
      {isOpen && (
        <div className={style.base}>
          <Container>
            <Inventory size={Math.max(12, items.length)} items={items} />

            <button onClick={endInteraction}>Close</button>
          </Container>
        </div>
      )}
    </div>
  );
};
