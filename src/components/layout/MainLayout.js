import PropTypes from "prop-types";
import { css } from "@emotion/react";

import Header from "@/components/common/Header";
import Main from "@/components/common/Main";
import Footer from "@/components/common/Footer";

MainLayout.propTypes = {
  background: PropTypes.bool,
  full: PropTypes.bool,
};

function MainLayout({ background, full, children, ...props }) {
  return (
    <div css={mainLayout}>
      <Header background={background} full={full} />
      <Main {...props}>{children}</Main>
      <Footer />
    </div>
  );
}

const mainLayout = css`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
`;

export default MainLayout;
