import { css } from "@emotion/react";

function Container({ children, ...props }) {
  return (
    <div css={ContainerStyle} {...props}>
      {children}
    </div>
  );
}

const ContainerStyle = css`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
`;

export default Container;
