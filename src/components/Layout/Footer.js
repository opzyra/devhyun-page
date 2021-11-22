import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { color, fontFamilyWithRoboto } from "@/styles";

import Container from "../Container";

import OpenSource from "@/assets/svg/Opensource.svg";

Footer.propTypes = {};

function Footer() {
  return (
    <footer css={footerStyle}>
      <Container>
        <div className="information">
          <span className="name">데브현</span>
          <span>
            이메일 <b>hhkim@devhyun.com</b>
          </span>
          <span>
            카카오톡 <b>opzyra</b>
          </span>
        </div>
        <div className="bar">
          <div className="phrase">
            본 사이트는 Chrome, Edge, Whale 등 최신 브라우저에 최적화되어
            있습니다.
            <div className="copyright">
              Copyright © Devhyun. All Rights Reserved.
            </div>
          </div>
          <div className="opensource">
            <a href="" target="_blank">
              <OpenSource />
              <div className="text">
                Open-Source
                <br />
                MIT License
              </div>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}

const footerStyle = css`
  padding: 40px 0px;
  margin-top: auto;
  background: #f5f5f5;
  font-size: 14px;
  font-weight: 400;
  color: #667084;

  .information .name {
    font-weight: 900;
    color: ${color.font};
  }

  .information span + span {
    margin-left: 16px;
  }

  .information span b {
    font-weight: 900;
    color: ${color.font};
    font-family: ${fontFamilyWithRoboto};
  }

  .bar {
    padding-top: 16px;
    display: flex;
    justify-content: space-between;
  }

  .bar .action .item {
    display: inline-block;
  }

  .bar .action .item + .item {
    margin-left: 12px;
  }

  .bar .opensource a {
    display: flex;
    align-items: center;
  }

  .bar .opensource svg {
    width: 44px;
  }

  .bar .opensource .text {
    font-size: 12px;
  }
`;

export default Footer;
