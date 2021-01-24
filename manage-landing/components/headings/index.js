import React from "react";
import { Container, Logo, Menu, Nav } from "./styles/header";

export default function Header({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ children, ...restProps }) {
    return <Logo {...restProps} />
  };

Header.Menu = function HeaderMenu({ children, ...restProps }) {
  return <Menu {...restProps} />
};

Header.Nav = function HeaderNav({ children, ...restProps }) {
    return <Nav {...restProps} />
  };
