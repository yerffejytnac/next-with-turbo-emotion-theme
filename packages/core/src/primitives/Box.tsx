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

export interface BoxProps
  extends SystemCommonProps,
    SystemLayoutProps,
    SystemBorderProps {
  children?: ReactNode;
}

const Root = styled.div<BoxProps>`
  ${border}
  ${common}
  ${layout}
`;

export const Box = ({ children, ...rest }: BoxProps) => (
  <Root {...rest}>{children}</Root>
);

Box.displayName = "Box";
