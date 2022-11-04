import { useRef } from "react";
import { useButton } from "react-aria";

import { Root } from "./Button.styled";
import { ButtonProps } from "./Button.types";

export const Button = (props: ButtonProps) => {
  const ref = useRef(null);
  const { buttonProps } = useButton(props, ref);
  const { children, variant = "filled", ...rest } = props;

  return (
    <Root variant={variant} ref={ref} {...buttonProps} {...rest}>
      {children}
    </Root>
  );
};

Button.displayName = "Button";
