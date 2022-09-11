import React from "react";
import { Routes, Route, useParams, useLocation } from "react-router-dom";

import { TabBar } from "./common/components/TabBar/TabBar";

import { RoutingService } from "./common/services/RoutingService";

import { LoadingView } from "./common/views/LoadingView/LoadingView";
import { StatisticsView } from "./containers/CharacterContainer/Statistics/StatisticsView";
import { QuestList } from "./containers/QuestsContainer/QuestList/QuestList";
import { ActiveQuest } from "./containers/QuestsContainer/ActiveQuest/ActiveQuest";
import { QuestComplete } from "./containers/QuestsContainer/QuestComplete/QuestComplete";
import { Shop } from "./containers/ShopContainer/Shop/Shop";

import style from "./App.module.css";
import { useRouteMatch } from "./common/hooks/useRouteMatch";

function App() {
  const isLoadingRoute = useRouteMatch(RoutingService.ROUTE.LOADING);

  return (
    <div className={style.base}>
      <main className={style.content}>
        <Routes>
          <Route
            path={RoutingService.ROUTE.LOADING}
            element={<LoadingView />}
          />
          <Route
            path={RoutingService.ROUTE.CHARACTER}
            element={<StatisticsView />}
          />
          <Route
            path={RoutingService.ROUTE.QUEST_LIST}
            element={<QuestList />}
          />
          <Route
            path={RoutingService.ROUTE.ACTIVE_QUEST}
            element={<ActiveQuest />}
          />
          <Route
            path={RoutingService.ROUTE.COMPLETE_QUEST}
            element={<QuestComplete />}
          />

          <Route path={RoutingService.ROUTE.SHOP} element={<Shop />} />
        </Routes>
      </main>
      {!isLoadingRoute && (
        <aside>
          <TabBar />
        </aside>
      )}
    </div>
  );
}

export default App;
