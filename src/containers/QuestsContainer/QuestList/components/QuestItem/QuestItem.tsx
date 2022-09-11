import React, { FunctionComponent } from "react";
import { Badge } from "../../../../../common/components/Badge/Badge";

import style from "./QuestItem.module.css";

interface IQuestItemProps {}

export const QuestItem: FunctionComponent<IQuestItemProps> = () => {
  return (
    <div className={style.base}>
      <h3 className={style.title}>Quest name</h3>
      <ul className={style.badgeList}>
        <Badge>modifier</Badge>
        <Badge>modifier</Badge>
        <Badge>modifier</Badge>
        <Badge>modifier</Badge>
      </ul>

      <footer className={style.footer}>
        <p>LVL 1</p>
      </footer>
    </div>
  );
};
