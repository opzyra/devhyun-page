import { css } from "@emotion/react";

export const breakPoint = {
  M: 432,
  MD: 999,
  LG: 1279,
  XL: 1440,
};

const M = (style) => css`
  @media (max-width: ${breakPoint.M}px) {
    ${style}
  }
`;

const MD = (style) => css`
  @media (max-width: ${breakPoint.MD}px) {
    ${style}
  }
`;

const LG = (style) => css`
  @media (max-width: ${breakPoint.LG}px) {
    ${style}
  }
`;

const XL = (style) => css`
  @media (max-width: ${breakPoint.XL}px) {
    ${style}
  }
`;

const media = {
  M,
  MD,
  LG,
  XL,
};

export default media;
