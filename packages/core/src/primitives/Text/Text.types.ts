import { ReactNode } from "react";
import { SpaceProps, TypographyProps } from "styled-system";

export const textVariants = [
  "text-display-large",
  "text-display-medium",
  "text-display-small",
  "text-headline-large",
  "text-headline-medium",
  "text-headline-small",
  "text-title-large",
  "text-title-medium",
  "text-title-small",
  "text-label-large",
  "text-label-medium",
  "text-label-small",
  "text-body-large",
  "text-body-medium",
  "text-body-small",
] as const;

export type TextVariant = typeof textVariants[number];

export interface TextProps extends SpaceProps, TypographyProps {
  as?: React.ElementType;
  children: ReactNode;
  variant?: TextVariant;
}
