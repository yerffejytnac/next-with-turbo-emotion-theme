import { ReactNode } from "react";
import styled from "@emotion/styled";
import {
  space,
  SpaceProps,
  typography,
  TypographyProps,
  textStyle,
  TextStyleProps,
} from "styled-system";

interface Props extends SpaceProps, TextStyleProps, TypographyProps {
  as?: React.ElementType;
  children?: ReactNode;
}

const Root = styled.p<Props>`
  ${space}
  ${textStyle}
  ${typography}
`;

export const Text = ({ as, children, ...rest }: Props) => (
  <Root as={as} {...rest}>
    {children}
  </Root>
);

Text.displayName = "Text";
