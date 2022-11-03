import { Root } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = ({
  children,
  variant = "filled",
  ...rest
}: ButtonProps) => {
  return (
    <Root variant={variant} {...rest}>
      {children}
    </Root>
  );
};

Button.displayName = "Button";
