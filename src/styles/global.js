import { css } from "@emotion/react";
import fonts from "./fonts";
import media from "./media";

export const fontFamily = [
  "Noto Sans KR",
  "Apple SD Gothic Neo",
  '"돋움"',
  "Dotum",
  "Helvetica Neue",
  "arial",
  "sans-serif",
].join(", ");

export const fontFamilyWithPaybooc = [
  "paybooc",
  "Apple SD Gothic Neo",
  '"돋움"',
  "Dotum",
  "Helvetica Neue",
  "arial",
  "sans-serif",
].join(", ");

export const fontFamilyWithPoppins = [
  "Poppins",
  "Apple SD Gothic Neo",
  '"돋움"',
  "Dotum",
  "Helvetica Neue",
  "arial",
  "sans-serif",
].join(", ");

export const zIndex = {
  LEVEL_10: 10000,
  LEVEL_9: 5000,
  LEVEL_8: 2500,
  LEVEL_7: 100,
  LEVEL_6: 50,
  LEVEL_5: 25,
  LEVEL_4: 10,
  LEVEL_3: 1,
  LEVEL_2: 0,
  LEVEL_1: -10000,
};

export const color = {
  font: "#333333",
  gray: "#515058",
  brand: "#2d8eff",
  primary: "#2a63d8",
  secondary: "#74AFF2",
  danger: "#ff4d4f",
};

export const a11y = css`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  overflow: hidden;
  border: 0;
  clip: rect(0, 0, 0, 0);
`;

export const inheritFont = css`
  color: inherit;
  letter-spacing: inherit;
  font-family: inherit;
`;

export const resetAppearance = css`
  appearance: none;
  background: none;
  box-shadow: none;
  border: 0;
`;

export const resetSpacing = css`
  margin: 0;
  padding: 0;
`;

export const reset = css`
  ${fonts};
  body {
    ${css([resetSpacing])};
    overflow-x: hidden;
  }
  hr {
    ${css([resetSpacing])};
  }
  p {
    ${css([resetSpacing])};
  }
  button {
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    ${css([inheritFont, resetAppearance, resetSpacing])};
    * {
      position: relative;
      top: 0;
      left: 0;
    }
  }
  input {
    ${inheritFont};
    ${resetAppearance};
    ${resetSpacing};
    &::-ms-clear {
      display: none;
    }
    &::-webkit-search-cancel-button {
      display: none;
    }
    &:focus {
      outline: none;
    }
  }
  ul {
    list-style-type: none;
    font-size: 0px;
    ${css([resetSpacing])};
  }
  li {
    font-size: initial;
    line-height: initial;
  }

  a {
    text-decoration: none;
    color: ${color.font};
  }

  * {
    .a11y {
      ${css([a11y])};
    }
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  pre {
    font-family: inherit;
  }
`;

export const typography = css`
  body {
    font-family: ${fontFamily};
    font-size: 18px;
    color: ${color.font};
  }

  h1 {
    font-size: 40px;
  }

  h2 {
    font-size: 32px;
  }

  h3 {
    font-size: 28px;
  }

  h4 {
    font-size: 24px;
  }

  h5 {
    font-size: 20px;
  }

  h6 {
    font-size: 16px;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: 700;
    line-height: 1.5;
  }

  p {
    line-height: 1.6;
  }

  ${media.XL(
    css`
      h1 {
        font-size: 36px;
      }

      h2 {
        font-size: 32px;
      }

      h3 {
        font-size: 28px;
      }

      h4 {
        font-size: 24px;
      }

      h5 {
        font-size: 20px;
      }

      h6 {
        font-size: 16px;
      }
    `,
  )}

  ${media.LG(
    css`
      body {
        font-size: 16px;
      }

      h1 {
        font-size: 32px;
      }

      h2 {
        font-size: 28px;
      }

      h3 {
        font-size: 24px;
      }

      h4 {
        font-size: 20px;
      }

      h5 {
        font-size: 18px;
      }

      h6 {
        font-size: 16px;
      }
    `,
  )}

  ${media.MD(
    css`
      body {
        font-size: 16px;
      }

      h1 {
        font-size: 28px;
      }

      h2 {
        font-size: 24px;
      }

      h3 {
        font-size: 20px;
      }

      h4 {
        font-size: 18px;
      }

      h5 {
        font-size: 16px;
      }

      h6 {
        font-size: 14px;
      }
    `,
  )}

  ${media.M(
    css`
      body {
        font-size: 16px;
      }

      h1 {
        font-size: 22px;
      }

      h2 {
        font-size: 20px;
      }

      h3 {
        font-size: 18px;
      }

      h4 {
        font-size: 16px;
      }

      h5 {
        font-size: 15px;
      }

      h6 {
        font-size: 14px;
      }
    `,
  )}
`;
