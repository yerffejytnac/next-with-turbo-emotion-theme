import styled from "@emotion/styled";
import { space, typography } from "styled-system";

import { textStyles } from "@shared/theme";

import { TextProps } from "./Text.types";

export const Root = styled.p<TextProps>`
  ${({ variant }) => variant && textStyles[variant]}

  ${space}
  ${typography}
`;
