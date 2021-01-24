import React from "react";
import DifferentManageContainer from "./Containers/DifferentManage";
import HeaderContainer from "./Containers/header";
import MainHeadingsContainer from "./Containers/main-headings";

export default function App() {
  return (
    <main>
      <article>
        <HeaderContainer />
        <MainHeadingsContainer />
        <DifferentManageContainer />
      </article>
    </main>
  );
}
