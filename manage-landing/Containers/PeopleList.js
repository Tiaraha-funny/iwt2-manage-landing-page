import React from "react";
import PeopleLists from "../components/peopleLists";

export default function PeopleListContainer() {
  return (
    <Container>
      <PeopleLists.Title>What's they have said</PeopleLists.Title>
      <PeopleLists.Lists>
        <PeopleLists.Items>
          <PeopleLists.Names></PeopleLists.Names>
        </PeopleLists.Items>
      </PeopleLists.Lists>
    </Container>
  );
}
