import React from "react";
import { Routes, Route } from "react-router-dom";

import { TabBar } from "./common/components/TabBar/TabBar";

import { RoutingService } from "./common/services/RoutingService";

import { LoadingView } from "./common/views/LoadingView/LoadingView";
import { StatisticsView } from "./containers/CharacterContainer/Statistics/StatisticsView";
import { useRouteMatch } from "./common/hooks/useRouteMatch";
import { QuestList } from "./containers/QuestsContainer/QuestList/QuestList";
import { ActiveQuest } from "./containers/QuestsContainer/ActiveQuest/ActiveQuest";
import { QuestComplete } from "./containers/QuestsContainer/QuestComplete/QuestComplete";
import { TavernView } from "./common/views/TavernView/TavernView";
import { Shop } from "./containers/ShopContainer/Shop/Shop";

import style from "./App.module.css";

function App() {
  const isLoadingRoute = useRouteMatch(RoutingService.ROUTE.LOADING);
  const isActiveQuestRoute = useRouteMatch(RoutingService.ROUTE.ACTIVE_QUEST);

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

          <Route path={RoutingService.ROUTE.TAVERN} element={<TavernView />} />

          <Route path={RoutingService.ROUTE.SHOP} element={<Shop />} />
        </Routes>
      </main>
      {!isLoadingRoute && !isActiveQuestRoute && (
        <aside className={style.aside}>
          <TabBar />
        </aside>
      )}
    </div>
  );
}

export default App;
