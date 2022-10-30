import React, { FunctionComponent } from "react";

import { Container } from "../../../common/components/Container/Container";
import { QuestSceneGL } from "../../../gl/scenes/QuestSceneGL/QuestSceneGL";

interface IActiveQuestProps {}

export const ActiveQuest: FunctionComponent<IActiveQuestProps> = () => {
  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <QuestSceneGL />
    </div>
  );
};
