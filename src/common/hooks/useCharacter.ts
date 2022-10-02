import { useState } from "react";
import { CharacterService } from "../services/CharacterService";

export const useCharacter = () => {
  const [character, setCharacter] = useState(CharacterService.status);

  const healthChange = (value: number) => {
    const updatedCharacter = {
      ...character,
    };

    let health = character.hp + value;

    updatedCharacter.hp = health;

    if (health <= 0) {
      updatedCharacter.hp = 0;
      updatedCharacter.isDead = true;
    }

    if (health > character.hpMax) {
      updatedCharacter.hp = character.hpMax;
    }

    setCharacter(updatedCharacter);
  };

  const levelUp = () => {};

  const create = () => {
    CharacterService.createCharacter();

    setCharacter(CharacterService.status);
  };

  return { character, healthChange, levelUp, create };
};
