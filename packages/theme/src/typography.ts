import { systemFonts, monoFonts } from "./fonts";

const fonts = {
  body: `Moderat, ${systemFonts}`,
  heading: `Moderat, ${systemFonts}`,
  monospace: `${monoFonts}`,
};

const fontSizes = {
  "display-large": "3.5625rem",
  "display-medium": "2.8125rem",
  "display-small": "2.25rem",
  "headline-large": "2rem",
  "headline-medium": "1.75rem",
  "headline-small": "1.5rem",
  "title-large": "1.375rem",
  "title-medium": "1rem",
  "title-small": ".875rem",
  "label-large": ".875rem",
  "label-medium": ".75rem",
  "label-small": ".6875rem",
  "body-large": "1rem",
  "body-medium": ".875rem",
  "body-small": ".75rem",
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  bold: 700,
};

const lineHeights = {
  body: "calc(1em + 0.5rem)",
  heading: 1.125,
};

const textStyles = {
  "text-display-large": {
    fontSize: "3.5625rem",
    lineHeight: "4rem",
    fontWeight: 400,
    letterSpacing: "-0.0156rem",
  },
  "text-display-medium": {
    fontSize: "2.8125rem",
    lineHeight: "3.25rem",
    fontWeight: 400,
  },
  "text-display-small": {
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
    fontWeight: 400,
  },
  "text-headline-large": {
    fontSize: "2rem",
    lineHeight: "2.5rem",
    fontWeight: 400,
  },
  "text-headline-medium": {
    fontSize: "1.75rem",
    lineHeight: "2.25rem",
    fontWeight: 400,
  },
  "text-headline-small": {
    fontSize: "1.5rem",
    lineHeight: "2rem",
    fontWeight: 400,
  },
  "text-title-large": {
    fontSize: "1.375rem",
    lineHeight: "1.75rem",
    fontWeight: 400,
  },
  "text-title-medium": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: 500,
    letterSpacing: ".0063rem",
  },
  "text-title-small": {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    letterSpacing: ".0063rem",
  },
  "text-label-large": {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 500,
    letterSpacing: ".0063rem",
  },
  "text-label-medium": {
    fontSize: ".75rem",
    lineHeight: "1rem",
    fontWeight: 500,
    letterSpacing: ".0313rem",
  },
  "text-label-small": {
    fontSize: ".6875rem",
    lineHeight: "1rem",
    fontWeight: 500,
    letterSpacing: ".0313rem",
  },
  "text-body-large": {
    fontSize: "1rem",
    lineHeight: "1.5rem",
    fontWeight: 300,
    letterSpacing: ".0313rem",
  },
  "text-body-medium": {
    fontSize: ".875rem",
    lineHeight: "1.25rem",
    fontWeight: 300,
    letterSpacing: ".0156rem",
  },
  "text-body-small": {
    fontSize: ".75rem",
    lineHeight: "1rem",
    fontWeight: 300,
    letterSpacing: ".025rem",
  },
};

export { fonts, fontSizes, fontWeights, lineHeights, textStyles };

export type LineHeights = typeof lineHeights;
export type FontWeights = typeof fontWeights;
export type FontSizes = typeof fontSizes;
export type TextStyles = typeof textStyles;

export interface FontFamilies {
  body: string;
  heading: string;
  monospace: string;
}
