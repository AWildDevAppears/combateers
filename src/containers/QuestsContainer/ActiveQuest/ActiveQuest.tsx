import React, { FunctionComponent } from "react";

import { Container } from "../../../common/components/Container/Container";
import { QuestSceneGL } from "../../../gl/scenes/QuestSceneGL/QuestSceneGL";

interface IActiveQuestProps {}

export const ActiveQuest: FunctionComponent<IActiveQuestProps> = () => {
  return (
    <Container>
      <QuestSceneGL />
    </Container>
  );
};
