import React from "react";
import Navigation from "../components/navigation";
import { Container } from "../components/navigation/styles/navigation";

export default function NavigationContainer() {
  return (
      <Container>
        <Navigation.Lists>
          <Navigation.Items>
            <Navigation.Anchor>Pricing</Navigation.Anchor>
          </Navigation.Items>
          <Navigation.Items>
            <Navigation.Anchor>Product</Navigation.Anchor>
          </Navigation.Items>
          <Navigation.Items>
            <Navigation.Anchor>About Us</Navigation.Anchor>
          </Navigation.Items>
          <Navigation.Items>
            <Navigation.Anchor>careers</Navigation.Anchor>
          </Navigation.Items>
          <Navigation.Items>
            <Navigation.Anchor>Comunity</Navigation.Anchor>
          </Navigation.Items>
        </Navigation.Lists>
      </Container>
  );
}
