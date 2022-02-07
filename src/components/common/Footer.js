import { css } from "@emotion/react";
import { color, fontFamilyWithRoboto, media } from "@/styles";

import Container from "@/components/common/Container";

import OpenSource from "@/assets/svg/Opensource.svg";

function Footer() {
  return (
    <footer css={footer}>
      <Container>
        <div css={information}>
          <span css={appName}>데브현</span>
          <span>
            이메일
            <span>
              <b>hhkim@devhyun.com</b>
            </span>
          </span>
          <span>
            카카오톡
            <span css={kakao}>
              <a
                href="http://pf.kakao.com/_xnVJib"
                target="_blank"
                rel="noreferrer"
              >
                <strong>바로가기</strong>
              </a>
            </span>
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
                Apache-2.0 License
              </p>
            </a>
          </div>
        </div>
      </Container>
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

  ${media.M(css`
    padding: 32px 0px;
  `)}
`;

const information = css`
  span {
    & + span {
      margin-left: 16px;
    }

    & > span {
      margin-left: 6px;
    }

    b {
      font-weight: 500;
      color: ${color.font};
      font-family: ${fontFamilyWithRoboto};
    }
  }

  ${media.M(css`
    span:nth-of-type(1) {
      font-size: 16px;
      display: block;
      margin-bottom: 6px;
    }

    span:nth-of-type(2) {
      margin-left: 0px;
    }
  `)}
`;

const appName = css`
  font-weight: 900;
  color: ${color.font};
`;

const kakao = css`
  font-weight: 900;
  color: ${color.font};

  small {
    font-weight: 500;
    color: ${color.font};
    font-family: ${fontFamilyWithRoboto};
  }

  strong {
    font-size: 12px;
    font-weight: 900;
  }
`;

const description = css`
  padding-top: 16px;
  display: flex;
  justify-content: space-between;

  ${media.M(css`
    font-size: 14px;
    flex-direction: column; ;
  `)}
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
  ${media.M(css`
    display: none;
  `)}
`;

export default Footer;
