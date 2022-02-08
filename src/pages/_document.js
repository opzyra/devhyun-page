import { Html, Head, Main, NextScript } from "next/document";

function Document() {
  return (
    <Html lang="ko">
      <Head />
      <body>
        <Main />
        <NextScript />
        <script async src="/script/channel.js"></script>
      </body>
    </Html>
  );
}

export default Document;
