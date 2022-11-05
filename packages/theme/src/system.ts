import { themeGet } from "@styled-system/theme-get";
import {
  border as _border,
  BorderProps,
  compose,
  display as _display,
  DisplayProps,
  flex as _flex,
  FlexProps,
  get as getKey,
  grid as _grid,
  GridProps,
  layout as _layout,
  LayoutProps,
  shadow as _shadow,
  ShadowProps,
  space as _space,
  SpaceProps,
  system,
  typography as _typography,
  TypographyProps,
} from "styled-system";

import { theme } from "./theme";

export const get = (key: string) => themeGet(key, getKey(theme, key));

export const border = compose(_border, _shadow);
export interface SystemBorderProps extends BorderProps, ShadowProps {}

export const common = compose(_space, _display);
export interface SystemCommonProps extends SpaceProps, DisplayProps {}

const whiteSpace = system({
  whiteSpace: {
    property: "whiteSpace",
  },
});

export const typography = compose(_typography, whiteSpace);
export interface SystemTypographyProps extends TypographyProps {
  whiteSpace?: "normal" | "nowrap" | "pre" | "pre-wrap" | "pre-line";
}

export const layout = compose(_layout, _flex, _grid);
export interface SystemLayoutProps extends LayoutProps, FlexProps, GridProps {}

export { themeGet };
