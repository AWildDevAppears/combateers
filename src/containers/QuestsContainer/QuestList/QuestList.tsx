import React, { FunctionComponent, useState } from "react";
import { Container } from "../../../common/components/Container/Container";
import { QuestItem } from "./components/QuestItem/QuestItem";

import style from "./QuestList.module.css";

interface IQuestListProps {}

export const QuestList: FunctionComponent<IQuestListProps> = () => {
  const [quests, setQuests] = useState(new Array(12).fill({}));

  return (
    <div className={style.base}>
      <Container className={style.content}>
        <h1>Quests</h1>

        {quests.map((quest) => (
          <QuestItem />
        ))}
      </Container>
      <div className={style.bg}></div>
    </div>
  );
};
