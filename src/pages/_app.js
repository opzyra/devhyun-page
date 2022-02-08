import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { ThemeProvider, Global } from "@emotion/react";

import { reset, typography, liabrary } from "@/styles";
import defaultTheme from "@/styles/theme";

import queryClient from "@/library/query";

import Error from "@/pages/_error";
import { useRouter } from "next/router";

function App({ Component, pageProps }) {
  const { statusCode } = pageProps;

  const router = useRouter();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <ThemeProvider theme={defaultTheme}>
          <Head>
            <meta charSet="UTF-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>
          <Global styles={[reset, typography, liabrary]} />
          <DefaultSeo
            title={process.env.NEXT_PUBLIC_SEO_TITLE}
            canonical={process.env.NEXT_PUBLIC_SEO_URL + router.pathname}
            description="웹 브라우저로 사람을 연결하는 개발자 김현호 입니다. 다양한 환경과 개발 언어로 맞춤형 웹사이트를 구축합니다."
            openGraph={{
              url: process.env.NEXT_PUBLIC_SEO_URL + router.pathname,
              images: [
                {
                  url: process.env.NEXT_PUBLIC_SEO_URL + "/devhyun.png",
                  alt: "devhyun",
                },
              ],
              site_name: "devhyun",
            }}
          />
          {statusCode ? (
            <Error statusCode={statusCode} />
          ) : (
            <Component {...pageProps} />
          )}
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default App;
