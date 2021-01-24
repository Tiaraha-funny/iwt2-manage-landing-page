import React from "react";
import {
  Container,
  Items,
  Lists,
  Anchor,
  GetStartBtn,
} from "./styles/navigation";

export default function Navigation({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Navigation.Lists = function NavigationLists({ children, ...restProps }) {
  return <Lists {...restProps}>{children}</Lists>;
};

Navigation.Items = function NavigationItems({ children, ...restProps }) {
  return <Items {...restProps}>{children}</Items>;
};

Navigation.Anchor = function NavigationAnchor({ ...restProps }) {
  return <Anchor {...restProps} />;
};
