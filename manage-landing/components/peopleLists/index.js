import React from "react";
import {
  Container,
  Title,
  Images,
  Items,
  Lists,
  Description,
  Names,
  Dots,
  DotIndicator,
  SlideDots,
  SlideImages,
} from "./styles/peopleLists";

export default function PeopleLists({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

PeopleLists.Title = function PeopleListsTitle({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

PeopleLists.Lists = function PeopleListsLists({ children, ...restProps }) {
  return <Lists {...restProps}>{children}</Lists>;
};

PeopleLists.Items = function PeopleListsItems({ children, ...restProps }) {
  return <Items {...restProps}>{children}</Items>;
};

PeopleLists.Names = function PeopleListsNames({ children, ...restProps }) {
  return <Names {...restProps}>{children}</Names>;
};

PeopleLists.Description = function PeopleListsDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

PeopleLists.Images = function PeopleListsImages({ ...restProps }) {
  return <Images {...restProps} />;
};

PeopleLists.SlideImages = function PeopleListsSlideImages({
  children,
  ...restProps
}) {
  return <SlideImages {...restProps}>{children}</SlideImages>;
};

PeopleLists.SlideDots = function PeopleListsSlideDots({
  children,
  ...restProps
}) {
  return <SlideDots {...restProps}>{children}</SlideDots>;
};

PeopleLists.DotIndicator = function PeopleListsDotIndicator({
  children,
  ...restProps
}) {
  return <DotIndicator {...restProps}>{children}</DotIndicator>;
};

PeopleLists.Dots = function PeopleListsDots({ children, ...restProps }) {
  return <Dots {...restProps}>{children}</Dots>;
};
