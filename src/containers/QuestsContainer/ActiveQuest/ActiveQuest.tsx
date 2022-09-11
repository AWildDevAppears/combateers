import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";

interface IActiveQuestProps {}

export const ActiveQuest: FunctionComponent<IActiveQuestProps> = () => {
  return (
    <Container>
      <h1>This is the quest I am currently doing</h1>
    </Container>
  );
};
