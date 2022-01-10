import Head from "next/head";
import { QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider, Global } from "@emotion/react";

import { reset, typography } from "@/styles";
import defaultTheme from "@/styles/theme";

import queryClient from "@/library/query";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={defaultTheme}>
            <Global styles={[reset, typography]} />
            <Component {...pageProps} />
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
