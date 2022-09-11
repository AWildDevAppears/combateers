import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";
import { QuestItem } from "./components/QuestItem/QuestItem";

interface IQuestListProps {}

export const QuestList: FunctionComponent<IQuestListProps> = () => {
  return (
    <Container>
      <h1>List of all of the available quests</h1>

      <QuestItem />
    </Container>
  );
};
