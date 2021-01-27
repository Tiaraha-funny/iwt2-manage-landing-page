import React, { useEffect, useState } from "react";
import PeopleLists from "../components/peopleLists";
import { Container } from "../components/peopleLists/styles/peopleLists";

import People from "../../people";

export default function PeopleListContainer() {
  const [showSlide, setShowSlide] = useState(false);
  const [ slide, setSlide ] = useState([]);

  useEffect(() => {
    setSlide(People);
  }, [])

  function handleDefaultShow() {
    setShowSlide(true);
  }

  function handleSecondeShow() {
    setShowSlide(true);
  }

  function handleLastShow() {
    setShowSlide(true);
  }

  console.log("slide", slide, People);

  return (
    <Container>
      <PeopleLists.Title>What's they have said</PeopleLists.Title>

      <PeopleLists.Lists>
        <PeopleLists.SlideImages>
          <PeopleLists.Items>
            <PeopleLists.Images src="images/avatar-anisha.png" />
            <PeopleLists.Names>Anisha Li</PeopleLists.Names>
            <PeopleLists.Description>
              "Manage has superchrgedour team's workflow. The ability to
              maintain on larger milestones at a all times keeps everyone
              motivated."
            </PeopleLists.Description>
          </PeopleLists.Items>

          <PeopleLists.Items>
            <PeopleLists.Images src="images/avatar-ali.png" />
            <PeopleLists.Names>Ali Bravo</PeopleLists.Names>
            <PeopleLists.Description>
              "We have been able to cancel so many subscriptions since using
              Manage. There is no more cross-channel confusion and everyone much
              more focused."
            </PeopleLists.Description>
          </PeopleLists.Items>

          <PeopleLists.Items>
            <PeopleLists.Images src="images/avatar-richard.png" />
            <PeopleLists.Names>Richard Watts</PeopleLists.Names>
            <PeopleLists.Description>
              "Manage allows us to provide structure and process. It keeps us
              organized and focused. I can't stop recommending them to everyone
              I talk to."
            </PeopleLists.Description>
          </PeopleLists.Items>

          <PeopleLists.Items>
            <PeopleLists.Images src="images/avatar-shanai.png" />
            <PeopleLists.Names>Shanai Gough</PeopleLists.Names>
            <PeopleLists.Description>
              "Their software allows us to track, manage and collaborate on our
              project from anywhere. It keeps the whole team in async without
              being intrusive."
            </PeopleLists.Description>
          </PeopleLists.Items>
        </PeopleLists.SlideImages>

        <PeopleLists.SlideDots>
          <PeopleLists.Dots onClick={handleDefaultShow}></PeopleLists.Dots>
          <PeopleLists.Dots onClick={handleSecondeShow}></PeopleLists.Dots>
          <PeopleLists.Dots onClick={handleLastShow}></PeopleLists.Dots>
        </PeopleLists.SlideDots>
      </PeopleLists.Lists>
    </Container>
  );
}
