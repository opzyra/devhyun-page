import { css } from "@emotion/react";

function CheckGrid({ children }) {
  return <div css={checkGrid}>{children}</div>;
}

const checkGrid = css`
  .item + .item {
    margin-top: 20px;
  }
`;

export default CheckGrid;
