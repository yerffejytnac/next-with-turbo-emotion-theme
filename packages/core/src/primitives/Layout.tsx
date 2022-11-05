import { ReactNode } from "react";
import styled from "@emotion/styled";
import {
  border,
  SystemBorderProps,
  common,
  SystemCommonProps,
  layout,
  SystemLayoutProps,
} from "@shared/theme";

export interface LayoutProps
  extends SystemCommonProps,
    SystemLayoutProps,
    SystemBorderProps {
  children?: ReactNode;
}

const Root = styled.div<LayoutProps>`
  width: 100%;
  height: 100%;

  ${border}
  ${common}
  ${layout}
`;

export const Layout = ({ children, ...rest }: LayoutProps) => (
  <Root {...rest}>{children}</Root>
);

Layout.displayName = "Layout";
