import React, { FunctionComponent, useEffect, useState } from "react";
import { Container } from "../../components/Container/Container";
import { CharacterService, ICharacter } from "../../services/CharacterService";

import style from "./TavernView.module.css";

interface ITavernVIewProps {}

const CHARACTERS_TO_ROLL = 3;

export const TavernView: FunctionComponent<ITavernVIewProps> = () => {
  const [characters, setCharacters] = useState<ICharacter[]>([]);

  const onReroll = () => {
    const chars = [];

    for (let index = 0; index < CHARACTERS_TO_ROLL; index++) {
      chars.push(CharacterService.createCharacter());
    }

    setCharacters(chars);
  };

  useEffect(() => {
    onReroll();
  }, []);

  return (
    <div className={style.base}>
      <Container className={style.content}>
        <button onClick={onReroll}>Reroll characters</button>

        {characters.map((character) => (
          <ul>
            <li>Name: {character.name}</li>
            <li>HP: {character.hpMax}</li>
            <li>MANA: {character.manaMax}</li>
            <li>STRENGTH: {character.strength}</li>
          </ul>
        ))}
      </Container>
      <div className={style.bg}></div>
    </div>
  );
};
