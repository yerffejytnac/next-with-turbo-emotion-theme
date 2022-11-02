import { Root } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = ({ children, ...rest }: ButtonProps) => {
  return <Root {...rest}>{children}</Root>;
};

Button.displayName = "Button";
