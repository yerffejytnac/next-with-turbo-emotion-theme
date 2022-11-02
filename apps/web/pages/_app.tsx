import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app";

import { ThemeProvider } from "@shared/theme";

interface Props extends AppProps {}

const cache = createCache({ key: "next" });

const App = ({ Component, pageProps }: Props) => {
  return (
    <CacheProvider value={cache}>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default App;
