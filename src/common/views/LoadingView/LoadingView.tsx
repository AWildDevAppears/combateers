import React, { FunctionComponent, useEffect } from "react";
import { useNavigate } from "react-router";
import { Container } from "../../components/Container/Container";
import { RoutingService } from "../../services/RoutingService";

import style from "./LoadingView.module.css";

interface ILoadingView {}

export const LoadingView: FunctionComponent<ILoadingView> = () => {
  const navigate = useNavigate();

  // Placeholder - This will navigate once all of the user data has loaded in.
  useEffect(() => {
    setTimeout(() => {
      navigate(RoutingService.ROUTE.CHARACTER);
    }, 3000);
  }, []);

  return (
    <Container className={style.base}>
      <div className={style.contents}>
        <h1>Combateers</h1>
        <p>Loading</p>
      </div>
    </Container>
  );
};
