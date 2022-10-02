interface IQuestModification {
  name: string;
}

export const QuestModifiers: { [key: string]: IQuestModification } = {
  "01": {
    name: "Posionous",
  },
  "02": {
    name: "Waterlogged",
  },
};
