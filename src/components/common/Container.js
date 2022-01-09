import { css } from "@emotion/react";
import { media } from "@/styles";

function Container({ children, ...props }) {
  return (
    <div css={container} {...props}>
      {children}
    </div>
  );
}

const container = css`
  width: 1280px;
  margin: 0 auto;
  height: 100%;

  ${media.XL(
    css`
      width: 1084px;
    `,
  )}

  ${media.LG(
    css`
      width: 920px;
    `,
  )}

  ${media.MD(css`
    width: 100%;
    padding: 0px 36px;
  `)}
`;

export default Container;
