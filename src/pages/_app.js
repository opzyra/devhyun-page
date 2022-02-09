import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { QueryClientProvider, Hydrate } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import Router, { useRouter } from "next/router";
import Script from "next/script";
import withGA from "next-ga";

import { ThemeProvider, Global } from "@emotion/react";

import { reset, typography, liabrary } from "@/styles";
import defaultTheme from "@/styles/theme";

import queryClient from "@/library/query";

import Error from "@/pages/_error";

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
            <meta name="author" content="opzyra" />
            <meta
              name="google-site-verification"
              content={process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION}
            />
            <meta name="robots" content="ALL" />
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
          <Script id="channel-talk" strategy="lazyOnload">
            {`!function(){var n=window;if(n.ChannelIO)return(window.console.error||window.console.log||function(){})("ChannelIO script included twice.");var e=function(){e.c(arguments)};function t(){if(!n.ChannelIOInitialized){n.ChannelIOInitialized=!0;var e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src="https://cdn.channel.io/plugin/ch-plugin-web.js",e.charset="UTF-8";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}}e.q=[],e.c=function(n){e.q.push(n)},n.ChannelIO=e,"complete"===document.readyState?t():window.attachEvent?window.attachEvent("onload",t):(window.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1))}(),ChannelIO("boot",{pluginKey:"${process.env.NEXT_PUBLIC_CHANNEL_TALK}"});`}
          </Script>
          <ReactQueryDevtools initialIsOpen={false} />
        </ThemeProvider>
      </Hydrate>
    </QueryClientProvider>
  );
}

export default withGA(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, Router)(App);
