import { ReactNode } from "react";
import styled from "@emotion/styled";
import {
  flexbox,
  FlexboxProps,
  grid,
  GridProps,
  gridGap,
  GridGapProps,
  layout,
  LayoutProps,
  space,
  SpaceProps,
} from "styled-system";

interface Props
  extends FlexboxProps,
    GridProps,
    GridGapProps,
    LayoutProps,
    SpaceProps {
  children?: ReactNode;
}

const Root = styled.div<Props>`
  ${layout}
  ${flexbox}
  ${grid}
  ${gridGap}
  ${space}
`;

export const Box = ({ children, ...rest }: Props) => (
  <Root {...rest}>{children}</Root>
);

Box.displayName = "Box";
