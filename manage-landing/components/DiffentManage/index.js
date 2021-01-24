import React from "react";
import {
  SubCover,
  Title,
  Cover,
  SubTitle,
  Lists,
  Items,
  Button,
  Container,
  Description,
} from "./styles/DifferentManage";

export default function DifferentManage({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}

DifferentManage.Title = function DifferentManageTitle({
  children,
  ...restProps
}) {
  return <Title {...restProps}>{children}</Title>;
};

DifferentManage.SubTitle = function DifferentManageSubTitle({
  children,
  ...restProps
}) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

DifferentManage.Description = function DifferentManageTitle({
  children,
  ...restProps
}) {
  return <Description {...restProps}>{children}</Description>;
};

DifferentManage.Button = function DifferentManageButton({
  children,
  ...restProps
}) {
  return <Button {...restProps}>{children}</Button>;
};

DifferentManage.Cover = function DifferentManageCover({
  children,
  ...restProps
}) {
  return <Cover {...restProps}>{children}</Cover>;
};

DifferentManage.SubCover = function DifferentManageSubCover({
  children,
  ...restProps
}) {
  return <SubCover {...restProps}>{children}</SubCover>;
};

DifferentManage.Lists = function DifferentManageLists({
  children,
  ...restProps
}) {
  return <Lists {...restProps}>{children}</Lists>;
};

DifferentManage.Items = function DifferentManageItems({
  children,
  ...restProps
}) {
  return <Items {...restProps}>{children}</Items>;
};
