import "@shared/theme";
import styled from "@emotion/styled";
import isPropValid from "@emotion/is-prop-valid";
import { lighten, transparentize } from "polished";
import { variant } from "styled-system";

import { ButtonVariant } from "./Button.types";

interface RootProps {
  variant?: ButtonVariant;
}

export const Root = styled("button", {
  shouldForwardProp: (prop: string) =>
    (!["variant", "onPress"].includes(prop) && isPropValid(prop)) ||
    prop === "children",
})<RootProps>`
  /* Reset global styles... */
  all: unset;

  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  vertical-align: middle;
  padding: ${({ theme }) => theme.space[2.5]} ${({ theme }) => theme.space[6]};
  border-radius: 40px;
  transition-duration: 200ms;
  transition-property: transform, opacity, background-color, color, box-shadow,
    border-color;
  transition-timing-function: cubic-bezier(0.2, 0, 0, 1);
  will-change: transform, opacity, background-color, color, box-shadow,
    border-color;

  ${({ theme }) => theme.textStyles["text-label-large"]};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  ${({ theme }) =>
    variant({
      variants: {
        elevated: {
          backgroundColor: theme.colors.neutral[100],
          color: theme.colors.neutral[20],
          boxShadow: theme.shadows["elevation-1"],
          "&:hover": {
            backgroundColor: theme.colors.neutral[99],
            boxShadow: theme.shadows["elevation-2"],
          },
          "&:focus": {},
          "&:active": {
            backgroundColor: theme.colors.neutral[95],
            boxShadow: theme.shadows["elevation-1"],
          },
          "&:disabled": {
            pointerEvents: "none",
            backgroundColor: transparentize(0.88, theme.colors.neutral[0]),
            color: transparentize(0.62, theme.colors.neutral[0]),
          },
        },
        filled: {
          backgroundColor: theme.colors.primary[60],
          color: theme.colors.primary[100],
          "&:hover": {
            backgroundColor: lighten(0.02, theme.colors.primary[60]),
            boxShadow: theme.shadows["elevation-1"],
          },
          "&:focus": {},
          "&:active": {
            backgroundColor: lighten(0.05, theme.colors.primary[60]),
            boxShadow: theme.shadows["elevation-0"],
          },
          "&:disabled": {
            pointerEvents: "none",
            backgroundColor: transparentize(0.88, theme.colors.neutral[0]),
            color: transparentize(0.62, theme.colors.neutral[0]),
          },
        },
        outlined: {
          backgroundColor: "transparent",
          border: `1px solid ${theme.colors.neutral[70]}`,
          "&:hover": {
            backgroundColor: theme.colors.neutral[99],
            border: `1px solid ${theme.colors.neutral[40]}`,
          },
          "&:focus": {},
          "&:active": {
            backgroundColor: theme.colors.neutral[95],
          },
          "&:disabled": {},
        },
        // TODO: Style Implementation...
        text: {
          paddingLeft: theme.space[3],
          paddingRight: theme.space[3],
          backgroundColor: "transparent",
          "&:hover": {},
          "&:focus": {},
          "&:active": {},
          "&:disabled": {},
        },
        // TODO: Style Implementation...
        tonal: {
          backgroundColor: theme.colors.secondary[70],
          color: theme.colors.secondary[20],
          "&:hover": {},
          "&:focus": {},
          "&:active": {},
          "&:disabled": {},
        },
      },
    })}
`;
