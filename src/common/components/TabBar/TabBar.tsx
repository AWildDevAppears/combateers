import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

import { RoutingService } from "../../services/RoutingService";

import style from "./TabBar.module.css";

interface ITabBar {}

export const TabBar: FunctionComponent<ITabBar> = () => {
  return (
    <footer>
      <nav className={style.base}>
        <Link to={RoutingService.ROUTE.CHARACTER}>Character</Link>
        <Link to={RoutingService.ROUTE.SHOP}>Shop</Link>
        <Link to={RoutingService.ROUTE.QUEST_LIST}>Embark</Link> {/* Last */}
      </nav>
    </footer>
  );
};
