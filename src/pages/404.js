import { useRouter } from "next/router";
import { css } from "@emotion/react";
import { fontFamilyWithNanumSquare, zIndex } from "@/styles";

import Image from "@/components/common/Image";
import Button from "@/components/common/Button";

import ImgError from "@/assets/images/img-error.png";

function NotFoundPage() {
  const router = useRouter();

  const handleClickBack = () => {
    router.back();
  };

  return (
    <div css={notFoundPage}>
      <div className="container">
        <div className="contents">
          <Image className="img" src={ImgError} alt="error" />
          <h1 className="title">페이지를 찾을수 없습니다.</h1>
          <div className="description">
            존재하지 않는 주소거나 변경·삭제되어 찾을 수 없습니다.
            <br />
            입력하신 페이지의 주소가 정확한지 다시 한 번 확인해 주세요.
          </div>
          <div className="actions">
            <Button type="brand" link="/">
              메인으로
            </Button>
            <Button type="default" onClick={handleClickBack}>
              이전페이지
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

const notFoundPage = css`
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

export default NotFoundPage;
