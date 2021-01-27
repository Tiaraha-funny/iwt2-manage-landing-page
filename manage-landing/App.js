import React from "react";
import DifferentManageContainer from "./Containers/DifferentManage";
import HeaderContainer from "./Containers/header";
import MainHeadingsContainer from "./Containers/main-headings";
import PeopleListContainer from "./Containers/PeopleList";
import SimplificationContainer from "./Containers/simplification";

export default function App() {
  return (
    <main>
      <article>
        <HeaderContainer />
        <MainHeadingsContainer />
      </article>
      <DifferentManageContainer />
      <PeopleListContainer />
      <SimplificationContainer/>
    </main>
  );
}
