import React, { useState } from "react";
import Header from "../components/headings";
import { Container } from "../components/headings/styles/header";
import NavigationContainer from "./navigation";

export default function HeaderContainer() {
  const [nav, setNav] = useState(false);

  function handleNavigationOpen() {
    setNav(true);
  }
  function handleNavigationClose() {
    setNav(false);
  }

  return (
    <section>
      <Container>
        <Header.Logo src="images/logo.svg" />

        {!nav ? (
          <Header.Menu
            src="images/icon-hamburger.svg"
            onClick={handleNavigationOpen}
          />
        ) : (
          <Header.Nav
            src="images/icon-close.svg"
            onClick={handleNavigationClose}
          />
        )}
      </Container>
      {nav ? <NavigationContainer /> : ""}
    </section>
  );
}
