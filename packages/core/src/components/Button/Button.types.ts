import { ReactNode } from "react";

// There are five types of common buttons: elevated, filled, filled tonal, outlined, and text.
export const buttonVariants = [
  "elevated",
  "filled",
  "outlined",
  "text",
  "tonal",
] as const;
export type ButtonVariant = typeof buttonVariants[number];

export interface ButtonProps {
  variant?: ButtonVariant;
  children: ReactNode;
  disabled?: boolean;
}
