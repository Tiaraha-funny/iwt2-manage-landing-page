import React from "react";
import MainHeadings from "../components/main-headings";
import { Container } from "../components/main-headings/styles/main-headings";
import GetStartBtnContainer from "./GetStartBtn";

export default function MainHeadingsContainer() {
  return (
    <Container>
      <MainHeadings.Title src="images/illustration-intro.svg" />
      <div className="cover">
        <MainHeadings.SubTitle>
          Bring everyone together tobuild better products
        </MainHeadings.SubTitle>
        <MainHeadings.Description>
          Manage makes it simplefor software team to plan day-to-day tasks while
          keeping the larger teams goals in view
        </MainHeadings.Description>
        <GetStartBtnContainer />
      </div>
    </Container>
  );
}
