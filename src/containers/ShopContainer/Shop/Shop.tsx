import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";
import { Inventory } from "../../../common/components/Inventory/Inventory";

import style from "./Shop.module.css";

interface IShopProps {}

export const Shop: FunctionComponent<IShopProps> = () => {
  return (
    <div className={style.base}>
      <Container className={style.content}>
        <h1>Shop</h1>

        <Inventory size={18} items={[]} />
      </Container>
      <div className={style.bg}></div>
    </div>
  );
};
