import { Root } from "./Text.styled";
import { TextProps } from "./Text.types";

export const Text = ({
  as,
  children,
  variant = "text-body-large",
  ...rest
}: TextProps) => (
  <Root as={as} variant={variant} {...rest}>
    {children}
  </Root>
);

Text.displayName = "Text";
