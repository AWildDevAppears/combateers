interface IQuestLocation {
  name: string;
}

export const QuestLocations: { [key: string]: IQuestLocation } = {
  "01": {
    name: "Caverns",
  },
  "02": {
    name: "Castle",
  },
  "03": {
    name: "Forest",
  },
};
