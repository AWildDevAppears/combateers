import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";
import { EquipmentCube } from "../../../common/components/EquipmentCube/EquipmentCube";
import { useCharacter } from "../../../common/hooks/useCharacter";
import { useInput } from "../../../common/hooks/useInput";

import style from "./StatisticsView.module.css";

interface IStatisticsView {}

export const StatisticsView: FunctionComponent<IStatisticsView> = () => {
  const { character, healthChange, create } = useCharacter();

  const onCharacterHit = () => {
    healthChange(-1);
  };

  const onCharacterHeal = () => {
    healthChange(1);
  };

  const onCharacterLevelUp = () => {};

  const onCharacterCreate = () => {
    create();
  };

  return (
    <Container className={style.base}>
      {/* <h1>Hello i am the basic statistics view</h1>
      <p>
        Here is my character, I can see my items here. I can change my equipment
        here too.
      </p>

      <p>HP: {character.hp}</p>
      <p>HP_MAX: {character.hpMax}</p>
      <p>LEVEL: {character.level}</p>
      <p>NAME: {character.name}</p>

      <button onClick={onCharacterHit}>Take damage</button>
      <button onClick={onCharacterHeal}>Heal</button>
      <button onClick={onCharacterLevelUp}>Level up</button>
      <button onClick={onCharacterCreate}>New character</button> */}

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
  );
};
