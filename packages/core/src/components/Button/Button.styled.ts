import "@shared/theme";
import styled from "@emotion/styled";
import { lighten } from "polished";

export const Root = styled.button`
  /* Reset styles... */
  all: unset;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${({ theme }) => theme.textStyles["text-label-large"]};

  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.primary[60]};
  color: ${({ theme }) => theme.colors.primary[100]};
  padding: ${({ theme }) => theme.space[2.5]} ${({ theme }) => theme.space[6]};
  border-radius: 100px;

  &:hover {
    background-color: ${({ theme }) => lighten(0.02, theme.colors.primary[60])};
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3),
      0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  }

  &:active {
    background-color: ${({ theme }) => lighten(0.04, theme.colors.primary[60])};
  }
`;
