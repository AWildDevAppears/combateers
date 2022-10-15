import {
  CharacterNames,
  CharacterSuffixes,
} from "../../data/CharacterNameChunks";
import { PersistService } from "./PersistService";

const CHARACTER_MAX_POINTS = 10;

const POINTS_TO_SPEND = 20;

interface ICharacterStats {
  hp: number;
  mana: number;
  strength: number;
}

export interface ICharacter extends ICharacterStats {
  hpMax: number;
  manaMax: number;
  level: number;
  name: string;
  isDead: boolean;
}

type ICharacterKeys = keyof ICharacterStats;

const CharacterHelpers = {
  createName: () => {
    const name =
      CharacterNames[Math.floor(Math.random() * CharacterNames.length)];
    const suffix =
      CharacterSuffixes[Math.floor(Math.random() * CharacterSuffixes.length)];

    return `${name} ${suffix}`;
  },

  numberWithinRange: (floor: number, ceil: number): number => {
    return Math.floor(Math.random() * (ceil - floor) + floor);
  },
};

export const CharacterService = {
  status: {
    hp: 10,
    hpMax: 10,
    mana: 10,
    manaMax: 10,
    strength: 10,
    level: 1,
    name: "",
    isDead: false,
  },

  /**
   * Randomly generate a character that the player will be able to play as.
   * The character will have randomly generated stats and modifiers (TODO).
   */
  createCharacter: (): ICharacter => {
    const statFields = {
      hp: 5,
      mana: 5,
      strength: 5,
    };

    let pointPool = POINTS_TO_SPEND;

    // Will not assign all of the points, keeps characters more random.
    Reflect.ownKeys(statFields).forEach((statKey) => {
      if (pointPool <= 0) return;

      if (pointPool > CHARACTER_MAX_POINTS) {
        const modifier = CharacterHelpers.numberWithinRange(
          0,
          CHARACTER_MAX_POINTS
        );

        statFields[statKey as ICharacterKeys] += modifier;
        pointPool -= modifier;
        return;
      }

      const modifier = CharacterHelpers.numberWithinRange(0, pointPool);

      statFields[statKey as ICharacterKeys] += modifier;
      pointPool -= modifier;
      return;
    });

    return {
      ...statFields,
      hpMax: statFields.hp,
      manaMax: statFields.mana,
      level: 1,
      name: CharacterHelpers.createName(),
      isDead: false,
    };
  },

  setCharacter: (character: ICharacter) => {
    CharacterService.status = character;
  },

  saveCharacter: () => {
    PersistService.save("combateers/pc", CharacterService.status);
  },

  loadCharacter: () => {
    CharacterService.status = PersistService.load("pc");
  },
};
