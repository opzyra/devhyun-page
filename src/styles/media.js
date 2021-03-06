import { css } from "@emotion/react";

export const breakPoint = {
  SM: 460, // 소형 모바일
  M: 768, // 모바일
  MD: 1024, // 태블릿
  LG: 1279, // 소형 노트북
  XL: 1440, // 노트북
};

export const display = {
  match: (size, display) => css`
    display: none;

    ${size === breakPoint.XL &&
    XL(css`
      display: ${display || "block"};
    `)};

    ${size === breakPoint.LG &&
    LG(css`
      display: ${display || "block"};
    `)};

    ${size === breakPoint.MD &&
    MD(css`
      display: ${display || "block"};
    `)};

    ${size === breakPoint.M &&
    M(css`
      display: ${display || "block"};
    `)};

    ${size === breakPoint.SM &&
    SM(css`
      display: ${display || "block"};
    `)};
  `,
  not: (size, display) => css`
    display: ${display || "block"};

    ${size === breakPoint.XL &&
    XL(css`
      display: none;
    `)};

    ${size === breakPoint.LG &&
    LG(css`
      display: none;
    `)};

    ${size === breakPoint.MD &&
    MD(css`
      display: none;
    `)};

    ${size === breakPoint.M &&
    M(css`
      display: none;
    `)};

    ${size === breakPoint.SM &&
    SM(css`
      display: none;
    `)};
  `,
};

const SM = (style) => css`
  @media (max-width: ${breakPoint.SM}px) {
    ${style}
  }
`;

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
  SM,
  M,
  MD,
  LG,
  XL,
};

export default media;
