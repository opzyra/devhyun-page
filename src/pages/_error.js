import { css } from "@emotion/react";
import { fontFamilyWithNanumSquare, zIndex } from "@/styles";

import Image from "@/components/common/Image";
import Button from "@/components/common/Button";

import ImgError from "@/assets/images/img-error.png";

function ErrorPage() {
  return (
    <div css={errorPage}>
      <div className="container">
        <div className="contents">
          <Image className="img" src={ImgError} alt="error" />
          <h1 className="title">시스템에 문제가 발생했습니다.</h1>
          <div className="description">
            기능이 정상적으로 작동하지 않아 요청을 처리할 수 없습니다.
            <br />
            계속해서 오류가 발생하면 관리자에게 문의해주세요.
          </div>
          <div className="actions">
            <Button type="brand" href="/">
              메인으로
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const errorPage = css`
  width: 100%;
  height: 100vh;
  background: white;
  position: fixed;
  z-index: ${zIndex.LEVEL_4};
  top: 0;
  left: 0;
  font-family: ${fontFamilyWithNanumSquare};

  .container {
    display: table;
    width: 100%;
    height: 100%;

    .contents {
      width: 460px;
      top: 346px;
      display: table-cell;
      vertical-align: middle;
      text-align: center;
    }

    .image {
      width: 120px;
      height: 80px;
    }

    .title {
      font-size: 24px;
      color: #21262e;
      margin-top: 40px;
      margin-bottom: 10px;
    }

    .description {
      margin: 0;
      font-size: 14px;
      line-height: 1.5;
      margin-bottom: 32px;
    }

    .actions {
      button {
        border-radius: 6px;
      }

      button + button {
        margin-left: 6px;
      }
    }

    .copyright {
      font-size: 11px;
      color: #9daab7;
      margin-top: 40px;
    }
  }
`;

export function getInitialProps(context) {
  const { err } = context;

  if (err) {
    // sentry.captureException(err, context);
    const statusCode = err.statusCode || 500;
    return { statusCode, err };
  }
}

export default ErrorPage;
