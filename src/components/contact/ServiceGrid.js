import { css } from "@emotion/react";

function ServiceGrid({ children }) {
  return <div css={serviceGrid}>{children}</div>;
}

const serviceGrid = css`
  display: flex;
  margin: -8px;

  .item {
    width: 25%;
    margin: 8px;
  }
`;

export default ServiceGrid;
