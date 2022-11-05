import styled from "@emotion/styled";
import { space, typography, variant } from "styled-system";
import { textStyles } from "@shared/theme";

import { TextProps } from "./Text.types";

export const Root = styled.p<TextProps>`
  ${variant({ variants: textStyles })};

  ${space}
  ${typography}
`;
