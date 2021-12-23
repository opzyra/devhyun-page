import PropTypes from "prop-types";
import { css } from "@emotion/react";

Main.propTypes = {};

function Main({ children, ...props }) {
  return (
    <main css={mainStyle} {...props}>
      {children}
    </main>
  );
}

const mainStyle = css``;

export default Main;
