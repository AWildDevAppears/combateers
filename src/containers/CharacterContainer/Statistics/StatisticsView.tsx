import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";
import { EquipmentCube } from "../../../common/components/EquipmentCube/EquipmentCube";
import { useCharacter } from "../../../common/hooks/useCharacter";
import { CharacterTurnaroundSceneGL } from "../../../gl/scenes/CharacterTurnaroundSceneGL/CharacterTurnaroundSceneGL";

import style from "./StatisticsView.module.css";

interface IStatisticsView {}

export const StatisticsView: FunctionComponent<IStatisticsView> = () => {
  return (
    <div className={style.base}>
      <Container className={style.content}>
        <div className={style.sidebar}>
          <div className={style.item}>
            <h3 className={style.title}>Helmet</h3>
            <EquipmentCube slot="helmet" />
          </div>
          <div className={style.item}>
            <h3 className={style.title}>Torso</h3>
            <EquipmentCube slot="torso" />
          </div>
          <div className={style.item}>
            <h3 className={style.title}>Legs</h3>
            <EquipmentCube slot="legs" />
          </div>
          <div className={style.item}>
            <h3 className={style.title}>Boots</h3>
            <EquipmentCube slot="feet" />
          </div>
          <div className={style.item}>
            <h3 className={style.title}>Primary</h3>
            <EquipmentCube slot="weapon" />
          </div>
          <div className={style.item}>
            <h3 className={style.title}>Accessory</h3>
            <EquipmentCube slot="accessory" />
          </div>
        </div>
      </Container>
      <CharacterTurnaroundSceneGL />
      <div className={style.bg}></div>
    </div>
  );
};
