import { css } from "@emotion/react";

import NotoSansKRThinWoff2 from "@/assets/fonts/NotoSansKR/NotoSansKR-Thin.woff2";
import NotoSansKRThinWoff from "@/assets/fonts/NotoSansKR/NotoSansKR-Thin.woff";
import NotoSansKRThinEot from "@/assets/fonts/NotoSansKR/NotoSansKR-Thin.eot";

import NotoSansKRRegularWoff2 from "@/assets/fonts/NotoSansKR/NotoSansKR-Regular.woff2";
import NotoSansKRRegularWoff from "@/assets/fonts/NotoSansKR/NotoSansKR-Regular.woff";
import NotoSansKRRegularEot from "@/assets/fonts/NotoSansKR/NotoSansKR-Regular.eot";

import PayboocMediumTtf from "@/assets/fonts/Paybooc/paybooc-medium.ttf";
import PayboocBoldTtf from "@/assets/fonts/Paybooc/paybooc-bold.ttf";

import RobotoRegularWoff from "@/assets/fonts/Roboto/roboto-regular-webfont.woff";
import RobotoMediumWoff from "@/assets/fonts/Roboto/roboto-medium-webfont.woff";

import NanumSquareLight from "@/assets/fonts/NanumSquare/NanumSquareLight.ttf";
import NanumSquareRegular from "@/assets/fonts/NanumSquare/NanumSquareRegular.ttf";
import NanumSquareBold from "@/assets/fonts/NanumSquare/NanumSquareBold.ttf";

export default css`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegularWoff});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMediumWoff});
    font-weight: 500;
    font-style: normal;
  }

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
    font-family: "NanumSquare";
    src: url(${NanumSquareLight});
    font-weight: 300;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumSquare";
    src: url(${NanumSquareRegular});
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "NanumSquare";
    src: url(${NanumSquareBold});
    font-weight: 700;
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
