import Head from "next/head";
import { QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider, Global } from "@emotion/react";

import { reset, typography, liabrary } from "@/styles";
import defaultTheme from "@/styles/theme";

import queryClient from "@/library/query";

import Error from "@/pages/_error";

function App({ Component, pageProps }) {
  const { statusCode } = pageProps;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>데브현</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <ThemeProvider theme={defaultTheme}>
            <Global styles={[reset, typography, liabrary]} />
            {statusCode ? (
              <Error statusCode={statusCode} />
            ) : (
              <Component {...pageProps} />
            )}
            <ReactQueryDevtools initialIsOpen={false} />
          </ThemeProvider>
        </Hydrate>
      </QueryClientProvider>
    </>
  );
}

export default App;
