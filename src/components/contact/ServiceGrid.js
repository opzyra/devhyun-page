import { css } from "@emotion/react";
import { media } from "@/styles";

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

  ${media.XL(css`
    flex-wrap: wrap;
    .item {
      width: calc(50% - 16px);
    }
  `)}

  ${media.M(css`
    flex-direction: column;
    margin: 0px;
    .item {
      width: 100%;
      margin: 0px;
    }

    .item + .item {
      margin-top: 12px;
    }
  `)}
`;

export default ServiceGrid;
