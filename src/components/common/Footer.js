import { css } from "@emotion/react";
import { color, fontFamilyWithRoboto, media } from "@/styles";

import OpenSource from "@/assets/svg/Opensource.svg";

function Footer() {
  return (
    <footer css={footer}>
      <div css={container}>
        <div css={information}>
          <span css={appName}>데브현</span>
          <span>
            이메일 <b>hhkim@devhyun.com</b>
          </span>
          <span>
            카카오톡 <b>opzyra</b>
          </span>
        </div>
        <div css={description}>
          <div>
            본 사이트는 Chrome, Edge, Whale 등 최신 브라우저에 최적화되어
            있습니다.
            <div>Copyright © Devhyun. All Rights Reserved.</div>
          </div>
          <div css={opensource}>
            <a href="" target="_blank">
              <OpenSource />
              <p>
                Open-Source
                <br />
                MIT License
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

const footer = css`
  padding: 40px 0px;
  margin-top: auto;
  background: #f5f5f5;
  font-size: 14px;
  font-weight: 400;
  color: #667084;
`;

const container = css`
  width: 1280px;
  height: 100%;
  margin: 0 auto;
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
`;

const information = css`
  span {
    & + span {
      margin-left: 16px;
    }

    b {
      font-weight: 900;
      color: ${color.font};
      font-family: ${fontFamilyWithRoboto};
    }
  }
`;

const appName = css`
  font-weight: 900;
  color: ${color.font};
`;

const description = css`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;
`;

const opensource = css`
  a {
    display: flex;
    align-items: center;
  }

  svg {
    width: 44px;
  }

  p {
    font-size: 12px;
  }
`;

export default Footer;
