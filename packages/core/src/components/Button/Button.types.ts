import { AriaButtonProps } from "react-aria";

// There are five types of common buttons: elevated, filled, filled tonal, outlined, and text.
export const buttonVariants = [
  "elevated",
  "filled",
  "outlined",
  "text",
  "tonal",
] as const;

export type ButtonVariant = typeof buttonVariants[number];

export interface ButtonProps extends AriaButtonProps {
  variant?: ButtonVariant;
}
