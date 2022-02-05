import { css } from "@emotion/react";

function CheckItem() {
  return (
    <div css={checkItem}>
      <div className="icon"></div>
      <div className="contents">
        <h6></h6>
        <p></p>
      </div>
    </div>
  );
}

const checkItem = css`
  display: flex;
`;

export default CheckItem;
