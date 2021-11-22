import PropTypes from "prop-types";
import { css } from "@emotion/react";

import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";

AppLayout.propTypes = {
  background: PropTypes.bool,
  full: PropTypes.bool,
};

function AppLayout({ background, full, children, ...props }) {
  return (
    <div css={appLayoutStyle}>
      <Header background={background} full={full} />
      <Main {...props}>{children}</Main>
      <Footer />
    </div>
  );
}

const appLayoutStyle = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default AppLayout;
