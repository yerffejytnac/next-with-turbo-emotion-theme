import "@emotion/react";

import { Breakpoints } from "./breakpoints";
import { Colors } from "./colors";
import {
  FontFamilies,
  FontSizes,
  FontWeights,
  LineHeights,
  TextStyles,
} from "./typography";
import { Space } from "./space";
import { Shadows } from "./shadows";

export interface DefaultTheme {
  breakpoints: Breakpoints;
  colors: Colors;
  fonts: FontFamilies;
  fontSizes: FontSizes;
  fontWeights: FontWeights;
  lineHeights: LineHeights;
  shadows: Shadows;
  space: Space;
  textStyles: TextStyles;
}

declare module "@emotion/react" {
  export interface Theme extends DefaultTheme {}
}
