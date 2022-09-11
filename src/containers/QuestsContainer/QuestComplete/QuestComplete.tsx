import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";

interface IQuestCompleteProps {}

export const QuestComplete: FunctionComponent<IQuestCompleteProps> = () => {
  return (
    <Container>
      <h1>You win!</h1>
    </Container>
  );
};
