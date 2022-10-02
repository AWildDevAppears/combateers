import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { Badge } from "../../../../../common/components/Badge/Badge";
import { RoutingService } from "../../../../../common/services/RoutingService";

import style from "./QuestItem.module.css";

interface IQuestItemProps {}

export const QuestItem: FunctionComponent<IQuestItemProps> = () => {
  return (
    <Link to={RoutingService.ROUTE.ACTIVE_QUEST} className={style.base}>
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
    </Link>
  );
};
