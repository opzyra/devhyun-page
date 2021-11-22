import { css } from "@emotion/react";

import NotoSansKRThinWoff2 from "@/assets/fonts/NotoSansKR/NotoSansKR-Thin.woff2";
import NotoSansKRThinWoff from "@/assets/fonts/NotoSansKR/NotoSansKR-Thin.woff";
import NotoSansKRThinEot from "@/assets/fonts/NotoSansKR/NotoSansKR-Thin.eot";

import NotoSansKRRegularWoff2 from "@/assets/fonts/NotoSansKR/NotoSansKR-Regular.woff2";
import NotoSansKRRegularWoff from "@/assets/fonts/NotoSansKR/NotoSansKR-Regular.woff";
import NotoSansKRRegularEot from "@/assets/fonts/NotoSansKR/NotoSansKR-Regular.eot";

import PayboocMediumTtf from "@/assets/fonts/Paybooc/paybooc-medium.ttf";
import PayboocBoldTtf from "@/assets/fonts/Paybooc/paybooc-bold.ttf";

export default css`
  @font-face {
    font-family: "paybooc";
    src: url(${PayboocMediumTtf});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "paybooc";
    src: url(${PayboocBoldTtf});
    font-weight: 700;
    font-style: normal;
  }

  @font-face {
    font-family: "paybooc";
    src: url(${PayboocBoldTtf});
    font-weight: 900;
    font-style: normal;
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 400;
    src: url(${NotoSansKRThinEot});
    src: local(""), url(${NotoSansKRThinEot}) format("embedded-opentype"),
      url(${NotoSansKRThinWoff2}) format("woff2"),
      url(${NotoSansKRThinWoff}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 700;
    src: url(${NotoSansKRThinEot});
    src: local(""), url(${NotoSansKRThinEot}) format("embedded-opentype"),
      url(${NotoSansKRThinWoff2}) format("woff2"),
      url(${NotoSansKRThinWoff}) format("woff");
  }

  @font-face {
    font-family: "Noto Sans KR";
    font-style: normal;
    font-weight: 900;
    src: url(${NotoSansKRRegularEot});
    src: local(""), url(${NotoSansKRRegularEot}) format("embedded-opentype"),
      url(${NotoSansKRRegularWoff2}) format("woff2"),
      url(${NotoSansKRRegularWoff}) format("woff");
  }
`;
