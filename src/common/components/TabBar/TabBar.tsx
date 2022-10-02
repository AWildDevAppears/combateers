import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import {
  UilArrowCircleRight,
  UilStore,
  UilUser,
} from "@iconscout/react-unicons";

import { RoutingService } from "../../services/RoutingService";

import style from "./TabBar.module.css";

interface ITabBar {}

export const TabBar: FunctionComponent<ITabBar> = () => {
  return (
    <footer>
      <nav className={style.base}>
        <Link className={style.link} to={RoutingService.ROUTE.CHARACTER}>
          <UilUser size="32" />
          <div>Character</div>
        </Link>
        <Link className={style.link} to={RoutingService.ROUTE.SHOP}>
          <UilStore size="32" />
          <div>Shop</div>
        </Link>
        <Link className={style.link} to={RoutingService.ROUTE.QUEST_LIST}>
          <UilArrowCircleRight size="32" />
          <div>Embark</div>
        </Link>{" "}
        {/* Last */}
      </nav>
    </footer>
  );
};
