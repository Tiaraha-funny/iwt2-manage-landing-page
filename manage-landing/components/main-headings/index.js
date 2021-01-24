import React from "react";
import { Container, Title, SubTitle, Description } from "./styles/main-headings";

export default function MainHeadings({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

MainHeadings.Title = function MainHeadingsTitle({ children, ...restProps }) {
  return <Title {...restProps} />;
};

MainHeadings.SubTitle = function MainHeadingsSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{ children }</SubTitle>;
};

MainHeadings.Description = function MainHeadingsDescription({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};
