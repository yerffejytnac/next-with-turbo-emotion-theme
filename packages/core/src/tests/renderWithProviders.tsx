import { ReactNode } from "react";
import { render } from "@testing-library/react";

import { ThemeProvider } from "@shared/theme";

export const renderWithProviders = (children: ReactNode) =>
  render(<ThemeProvider>{children}</ThemeProvider>);

export * from "@testing-library/react";
