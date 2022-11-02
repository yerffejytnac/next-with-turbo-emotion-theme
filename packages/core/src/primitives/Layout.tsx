import { ReactNode } from "react";
import styled from "@emotion/styled";
import {
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

interface Props extends FlexboxProps, GridProps, LayoutProps, SpaceProps {
  children?: ReactNode;
}

const Root = styled.div<Props>`
  width: 100%;
  height: 100%;

  ${layout}
  ${flexbox}
  ${grid}
  ${space}
`;

export const Layout = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

Layout.displayName = "Layout";
