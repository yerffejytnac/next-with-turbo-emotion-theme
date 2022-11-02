import React, { FC, memo } from "react";
import { Global, ThemeProvider as EmotionThemeProvider } from "@emotion/react";

import { globalStyles } from "./global";
import { theme as defaultTheme } from "./theme";
import { DefaultTheme } from "./types";

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: Partial<DefaultTheme>;
}

export const ThemeProvider: FC<ThemeProviderProps> = memo(
  ({ children, theme = {} }) => {
    const extendedTheme = Object.assign(defaultTheme, {
      ...theme,
    });

    return (
      <EmotionThemeProvider theme={extendedTheme}>
        <Global styles={globalStyles} />
        {children}
      </EmotionThemeProvider>
    );
  }
);

ThemeProvider.displayName = "ThemeProvider";
