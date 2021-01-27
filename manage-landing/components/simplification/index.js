import React from "react";
import {Container, Button} from "./styles/simplification";

export default function Simplification({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

Simplification.Title = function SimplificationTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>;
  }

Simplification.Button = function SimplificationButton({ children, ...restProps }) {
    return <Button {...restProps}>{children}</Button>;
  }
