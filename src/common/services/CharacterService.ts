import {
  CharacterNames,
  CharacterPrefixes,
  CharacterSuffixes,
} from "../../data/CharacterNameChunks";
import { PersistService } from "./PersistService";

const CharacterHelpers = {
  createName: () => {
    const prefix =
      CharacterPrefixes[Math.floor(Math.random() * CharacterPrefixes.length)];
    const name =
      CharacterNames[Math.floor(Math.random() * CharacterNames.length)];
    const suffix =
      CharacterSuffixes[Math.floor(Math.random() * CharacterSuffixes.length)];

    return `${prefix} ${name} ${suffix}`;
  },
};

export const CharacterService = {
  status: {
    hp: 10,
    hpMax: 10,
    level: 1,
    name: "",
    isDead: false,
  },

  createCharacter: () => {
    CharacterService.status = {
      hp: 10,
      hpMax: 10,
      level: 1,
      name: CharacterHelpers.createName(),
      isDead: false,
    };
  },

  saveCharacter: () => {
    PersistService.save("pc", CharacterService.status);
  },

  loadCharacter: () => {
    CharacterService.status = PersistService.load("pc");
  },
};
