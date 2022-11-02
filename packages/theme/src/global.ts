import { css } from "@emotion/react";

import { localFonts } from "./fonts";
import { reset } from "./reset";
import { theme } from "./theme";

export const globalStyles = css`
  ${localFonts};
  ${reset};

  :root {
    box-sizing: border-box;
    *,
    *::before,
    *::after {
      box-sizing: inherit;
    }
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;

    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.light};
    line-height: ${theme.lineHeights.body};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${theme.fonts.heading};
    font-weight: ${theme.fontWeights.bold};
    line-height: ${theme.lineHeights.heading};
  }

  h1 {
    ${theme.textStyles["text-display-large"]}
  }

  h2 {
    ${theme.textStyles["text-display-medium"]}
  }

  h3 {
    ${theme.textStyles["text-display-small"]}
  }

  h4 {
    ${theme.textStyles["text-headline-large"]}
  }

  h5 {
    ${theme.textStyles["text-headline-medium"]}
  }

  h6 {
    ${theme.textStyles["text-headline-small"]}
  }
`;
