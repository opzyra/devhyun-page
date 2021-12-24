import PropTypes from "prop-types";

import { useCallback, useRef } from "react";
import Lottie from "react-lottie-player";

import { css } from "@emotion/react";
import { fontFamilyWithPaybooc, color } from "@/styles";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/common/Container";
import TechStack from "@/components/about/TechStack";
import Project from "@/components/main/project";
import Blog from "@/components/main/Blog";

import Button from "@/components/common/Button";
import BubbleButton from "@/components/common/BubbleButton";

import Developer from "@/assets/json/developer.json";
import Process from "@/assets/json/process.json";

import Github from "@/assets/svg/Github.svg";
import KakaoTalk from "@/assets/svg/KakaoTalk.svg";
import ArrowRight from "@/assets/svg/ArrowRight.svg";
import ArrowLong from "@/assets/svg/ArrowLong.svg";

Main.propTypes = {};

function Main() {
  const projectRef = useRef(null);

  const handleClickProjectScroll = useCallback(() => {
    const projectInst = projectRef.current;
    window.scroll({
      behavior: "smooth",
      top: projectInst.offsetTop + 60,
    });
  }, []);

  return (
    <MainLayout background>
      <div css={cover}>
        <Container className="container">
          <div className="phrase">
            <h1>
              Make it happen
              <br />
              Websites, Solution, Platform
              <br />
            </h1>
            <p>
              안녕하세요
              <span className="exc">!</span>
              웹 브라우저로 사람을 연결하는 개발자 김현호 입니다.
              <br />
              다양한 환경과 개발 언어로 맞춤형 웹사이트를 구축합니다.
              <br />
              노하우가 담긴 프로젝트 작업물을 살펴보세요.
            </p>
            <div className="button">
              <BubbleButton onClick={handleClickProjectScroll}>
                프로젝트 살펴보기
              </BubbleButton>
            </div>
          </div>
          <div className="illustration">
            <Lottie
              loop
              play
              className="animation"
              animationData={Developer}
              segments={[95, 195]}
            ></Lottie>
          </div>
        </Container>
        <div css={social}>
          <div className="line"></div>
          <div className="item">
            <a href="" target="_blank" rel="noreferrer">
              <KakaoTalk />
            </a>
          </div>
          <div className="item">
            <a
              href="https://github.com/opzyra"
              target="_blank"
              rel="noreferrer"
            >
              <Github />
            </a>
          </div>
        </div>
      </div>
      <div css={project} ref={projectRef}>
        <Container>
          <div className="header">
            <h2>
              <span>Creative</span> Works
            </h2>
            <p>프로젝트를 진행하면서 다져진 경험이 스며들어 있습니다.</p>
            <div className="more">
              <span>MORE</span>
              <ArrowLong />
            </div>
          </div>
          <div className="body">
            <Project />
          </div>
        </Container>
      </div>

      <div css={skill}>
        <Container>
          <div className="header">
            <h2>
              Tech <span>Stack</span>
            </h2>
            <p>
              개발에 필요한 다양한 기술 스택을 보유하고 있습니다.
              <br />
              분야별 기술에 대한 자세한 내용은 소개 페이지에서 확인하실 수
              있습니다.
            </p>
          </div>
          <div className="body">
            <TechStack />
          </div>
        </Container>
      </div>

      <div css={blog}>
        <Container>
          <div className="header">
            <h2>
              <span>Blog</span> Topic
            </h2>
            <p>다양한 이야기들을 정성을 담아 기록하고 있습니다.</p>
            <div className="more">
              <span>MORE</span>
              <ArrowLong />
            </div>
          </div>
        </Container>
        <div className="body">
          <Blog />
        </div>
      </div>

      <div css={contact}>
        <div className="line"></div>
        <Container css={contactContainer}>
          <div className="header">
            <h2>
              Get{" "}
              <span>
                Started <span className="exc">!</span>
              </span>
            </h2>
            <p>
              새로운 프로젝트를 준비하거나 함께 일할 개발자를 찾고 계신가요?
              <br />
              이력서를 살펴보시고 프로젝트에 대해 알려주세요!
            </p>
          </div>
          <div className="body">
            <Button className="button" type="primary">
              <span>문의하기</span>
              <ArrowRight />
            </Button>
          </div>
          <div className="illustration">
            <Lottie
              loop
              play
              className="animation"
              animationData={Process}
            ></Lottie>
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

const cover = css`
  position: relative;
  height: 720px;

  &:before {
    content: "";
    position: absolute;
    background: #fafaff;
    width: 100%;
    height: 100%;
    right: 60px;
    z-index: -1;
    border-bottom-right-radius: 100px;
  }

  & > .container {
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 0px 100px;
  }

  .phrase {
    h1 {
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      line-height: 1.4;
    }

    p {
      margin-top: 28px;
      font-size: 20px;
      color: ${color.gray};

      .exc {
        font-family: ${fontFamilyWithPaybooc};
        font-weight: 900;
        display: inline-block;
        margin: 0px 6px 0px 1px;
        transform: rotate(4deg);
      }
    }

    .button {
      margin-top: 80px;
    }
  }

  .illustration .animation {
    width: 480px;
    height: 480px;
  }
`;

const social = css`
  display: flex;
  align-items: center;

  .line {
    width: 85%;
    height: 1px;
    background: #e3e2ef;
    margin-right: 40px;
  }

  .item {
    display: inline-block;

    svg {
      width: 24px;
      fill: ${color.gray};
    }

    &:hover {
      svg {
        transition: 0.4s;
        fill: ${color.primary};
      }
    }

    & + .item {
      margin-left: 20px;
    }
  }
`;

const project = css`
  padding: 80px 0px 80px;

  .header {
    margin-bottom: 36px;
    position: relative;

    h2 {
      display: inline-block;
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      margin-right: 32px;

      span {
        color: ${color.brand};
      }
    }

    p {
      display: inline-block;
      font-size: 16px;
      color: ${color.gray};
    }

    .more {
      position: absolute;
      bottom: 0px;
      right: 0px;

      span {
        font-size: 12px;
        font-family: ${fontFamilyWithPaybooc};
        font-weight: 900;
        font-weight: 700;
        margin-right: 10px;
        color: ${color.gray};
      }

      svg {
        width: 140px;
        stroke: ${color.brand};
      }
    }
  }
`;

const skill = css`
  padding: 120px 0px 40px;

  .header {
    position: relative;
    text-align: center;

    &:before {
      position: absolute;
      content: "";
      top: -90px;
      width: 1px;
      height: 68px;
      background: ${color.gray};
    }

    h2 {
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      margin-bottom: 16px;

      span {
        color: ${color.brand};
      }

      p {
        font-size: 18px;
      }
    }
  }
`;

const blog = css`
  padding: 80px 0px 60px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: #fafaff;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    border-top-left-radius: 100px;
  }

  .header {
    margin-bottom: 36px;
    position: relative;

    h2 {
      display: inline-block;
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      margin-right: 32px;

      span {
        color: ${color.brand};
      }

      p {
        display: inline-block;
        font-size: 16px;
        color: ${color.gray};
      }
    }

    .more {
      position: absolute;
      bottom: 0px;
      right: 0px;

      span {
        font-size: 12px;
        font-family: ${fontFamilyWithPaybooc};
        font-weight: 900;
        font-weight: 700;
        margin-right: 10px;
        color: ${color.gray};
      }

      svg {
        width: 140px;
        stroke: ${color.brand};
      }
    }
  }
`;

const contact = css`
  padding: 60px 0px;
  position: relative;

  &:before {
    content: "";
    position: absolute;
    background: #fafaff;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -1;
    border-bottom-right-radius: 100px;
  }

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    left: 0px;
    z-index: -2;
    background: #f5f5f5;
  }

  .line {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100px;
    border-top: 1px solid #eeeeee;
    border-top-right-radius: 100px;
  }
`;

const contactContainer = css`
  position: relative;

  .header {
    margin-bottom: 40px;

    h2 {
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      margin-bottom: 16px;
    }

    span {
      color: ${color.brand};

      .exc {
        font-family: ${fontFamilyWithPaybooc};
        font-weight: 900;
        font-weight: 700;
        display: inline-block;
        margin: 0px 6px 0px 1px;
        transform: rotate(4deg);
      }
    }
  }

  .body .button {
    width: 160px;
    border-radius: 10px;
    justify-content: space-between;
    font-size: 14px;
    padding: 14px 20px;
    position: relative;
    box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 2px rgb(0 0 0 / 5%),
      0 4px 4px rgb(0 0 0 / 5%), 0 8px 8px rgb(0 0 0 / 5%);

    & + .button {
      margin-left: 12px;
    }

    svg {
      width: 12px;
      fill: #ffffff;
    }
  }

  .illustration {
    position: absolute;
    top: 50%;
    right: 0px;
    transform: translateY(-50%);

    .animation {
      width: 580px;
    }
  }
`;

export default Main;
