import Head from "next/head";

import { ThemeProvider, Global } from "@emotion/react";

import { reset, typography } from "@/styles";
import defaultTheme from "@/styles/theme";

App.propTypes = {};

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeProvider theme={defaultTheme}>
        <Global styles={[reset, typography]} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
