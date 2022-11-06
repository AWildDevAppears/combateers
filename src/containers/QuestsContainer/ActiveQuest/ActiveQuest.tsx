import React, { FunctionComponent } from "react";

import { Container } from "../../../common/components/Container/Container";
import { QuestProviderGL } from "../../../gl/logistics/quest/QuestProviderGL/QuestProviderGL";
import { QuestSceneGL } from "../../../gl/scenes/QuestSceneGL/QuestSceneGL";

interface IActiveQuestProps {}

export const ActiveQuest: FunctionComponent<IActiveQuestProps> = () => {
  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <QuestProviderGL>
        <QuestSceneGL />
      </QuestProviderGL>
    </div>
  );
};
