import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";

interface IStatisticsView {}

export const StatisticsView: FunctionComponent<IStatisticsView> = () => {
  return (
    <Container>
      <h1>Hello i am the basic statistics view</h1>
      <p>
        Here is my character, I can see my items here. I can change my equipment
        here too.
      </p>
    </Container>
  );
};
