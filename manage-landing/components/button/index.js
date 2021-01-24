import React from 'react';
import { Container } from "./styles/button";

export function GetStartBtn({ children, ...restProps }) {
    return <Container {...restProps}>{ children }</Container>;
  }
