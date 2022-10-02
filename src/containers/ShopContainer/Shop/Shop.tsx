import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";
import { EquipmentCube } from "../../../common/components/EquipmentCube/EquipmentCube";

import style from "./Shop.module.css";

interface IShopProps {}

export const Shop: FunctionComponent<IShopProps> = () => {
  return (
    <div className={style.base}>
      <Container className={style.content}>
        <h1>Shop</h1>

        <div className={style.shop}>
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
          <EquipmentCube />
        </div>
      </Container>
      <div className={style.bg}></div>
    </div>
  );
};
