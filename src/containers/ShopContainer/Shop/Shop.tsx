import React, { FunctionComponent } from "react";
import { Container } from "../../../common/components/Container/Container";

interface IShopProps {}

export const Shop: FunctionComponent<IShopProps> = () => {
  return (
    <Container>
      <h1>Here is the shop interface</h1>
      <p>
        Use your gold to sell your loot and but new armor and weapons ready for
        your next adventure.
      </p>
    </Container>
  );
};
