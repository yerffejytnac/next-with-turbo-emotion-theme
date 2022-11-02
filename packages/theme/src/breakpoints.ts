export interface Breakpoints {
  sm: string;
  md: string;
  lg: string;
  xl: string;
}

const defaultBreakpoints = ["25em", "48em", "62em", "80em"] as const;

const createBreakpoints = (): string[] & Breakpoints => {
  const breakpoints = [...defaultBreakpoints] as string[] & Breakpoints;

  breakpoints.sm = breakpoints[0];
  breakpoints.md = breakpoints[1];
  breakpoints.lg = breakpoints[2];
  breakpoints.xl = breakpoints[3];

  return breakpoints;
};

const breakpoints = createBreakpoints();

export { defaultBreakpoints, breakpoints };
