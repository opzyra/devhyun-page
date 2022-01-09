import { useCallback, useRef } from "react";
import Lottie from "react-lottie-player";

import { css } from "@emotion/react";

import { fontFamilyWithPaybooc, color, media } from "@/styles";

import MainLayout from "@/components/layout/MainLayout";
import TechStack from "@/components/main/TechStack";
import Project from "@/components/main/Project";
import Blog from "@/components/main/Blog";

import Button from "@/components/common/Button";
import Container from "@/components/common/Container";

import Developer from "@/assets/json/developer.json";
import Process from "@/assets/json/process.json";

import Github from "@/assets/svg/Github.svg";
import KakaoTalk from "@/assets/svg/KakaoTalk.svg";
import ArrowRight from "@/assets/svg/ArrowRight.svg";
import ArrowLong from "@/assets/svg/ArrowLong.svg";

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
        <Container css={coverContainer}>
          <div css={coverPhrase}>
            <h1>
              Make it happen
              <br />
              Websites, Solution, Platform
              <br />
            </h1>
            <p>
              안녕하세요
              <span>!</span>
              웹 브라우저로 사람을 연결하는 개발자 김현호 입니다.
              <br />
              다양한 환경과 개발 언어로 맞춤형 웹사이트를 구축합니다.
              <br />
              노하우가 담긴 프로젝트 작업물을 살펴보세요.
            </p>
            <div css={coverButton}>
              <button onClick={handleClickProjectScroll}>
                프로젝트 살펴보기
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
          <div>
            <Lottie
              loop
              play
              css={coverAnimation}
              animationData={Developer}
              segments={[95, 195]}
            ></Lottie>
          </div>
        </Container>
        <div css={social}>
          <div css={socialLine}></div>
          <div css={socialItem}>
            <a href="" target="_blank" rel="noreferrer">
              <KakaoTalk />
            </a>
          </div>
          <div css={socialItem}>
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
          <div css={projectHeader}>
            <h2>
              <span>Creative</span> Works
            </h2>
            <p>프로젝트를 진행하면서 다져진 경험이 스며들어 있습니다.</p>
            <div css={projectHeaderMore}>
              <span>MORE</span>
              <ArrowLong />
            </div>
          </div>
          <div>
            <Project />
          </div>
        </Container>
      </div>

      <div css={skill}>
        <Container>
          <div css={skillHeader}>
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
          <div>
            <TechStack />
          </div>
        </Container>
      </div>

      <div css={blog}>
        <Container>
          <div css={blogHeader}>
            <h2>
              <span>Blog</span> Topic
            </h2>
            <p>다양한 이야기들을 정성을 담아 기록하고 있습니다.</p>
            <div css={blogHeaderMore}>
              <span>MORE</span>
              <ArrowLong />
            </div>
          </div>
        </Container>
        <div>
          <Blog />
        </div>
      </div>

      <div css={contact}>
        <div css={contactLine}></div>
        <Container css={contactContainer}>
          <div css={contactHeader}>
            <h2>
              Get{" "}
              <span>
                Started <span>!</span>
              </span>
            </h2>
            <p>
              새로운 프로젝트를 준비하거나 함께 일할 개발자를 찾고 계신가요?
              <br />
              이력서를 살펴보시고 프로젝트에 대해 알려주세요!
            </p>
          </div>
          <div>
            <Button css={contactBodyButton} type="primary">
              <span>문의하기</span>
              <ArrowRight />
            </Button>
          </div>
          <div css={contactBodyIllustration}>
            <Lottie
              loop
              play
              css={contactBodyAnimation}
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
    right: 3%;
    z-index: -1;
    border-bottom-right-radius: 100px;
  }

  ${media.LG(css`
    height: 600px;
  `)}

  ${media.MD(css`
    height: 460px;

    &:before {
      border-bottom-right-radius: 80px;
      right: 0px;
    }
  `)}
`;

const coverContainer = css`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px 0px;

  ${media.MD(css`
    padding: 20px 32px;
  `)}
`;

const coverPhrase = css`
  h1 {
    font-family: ${fontFamilyWithPaybooc};
    font-weight: 900;
    line-height: 1.4;
  }

  p {
    margin-top: 28px;
    font-size: 20px;
    color: ${color.gray};

    span {
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      display: inline-block;
      margin: 0px 6px 0px 1px;
      transform: rotate(4deg);
    }
  }

  ${media.LG(
    css`
      p {
        font-size: 18px;
      }
    `,
  )}

  ${media.MD(
    css`
      p {
        margin-top: 20px;
        font-size: 16px;
      }
    `,
  )}
`;

const coverButton = css`
  margin-top: 80px;

  button {
    color: #ffffff;
    font-size: 18px;
    border: 1px solid ${color.brand};
    background: ${color.brand};
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    width: 240px;
    padding: 20px 0px;
    box-shadow: 0px 3px 10px #0000000d;

    &:hover {
      color: ${color.brand};

      span {
        transform: translateY(0) scale(2);

        &:nth-of-type(1) {
          transition-delay: 0;
          left: 0;
        }

        &:nth-of-type(2) {
          transition-delay: 0.1s;
          left: 25%;
        }

        &:nth-of-type(3) {
          transition-delay: 0.2s;
          left: 50%;
        }

        &:nth-of-type(4) {
          transition-delay: 0.3s;
          left: 75%;
        }
      }
    }

    span {
      position: absolute;
      width: 25%;
      height: 100%;
      background-color: #ffffff;
      transform: translateY(150%);
      border-radius: 50%;
      transition: 0.5s;
      z-index: -1;
    }
  }

  ${media.MD(
    css`
      margin-top: 32px;

      button {
        width: 180px;
        font-size: 16px;
        padding: 16px 0px;
      }
    `,
  )}
`;

const coverAnimation = css`
  width: 480px;
  height: 480px;

  ${media.LG(css`
    width: 400px;
    height: 400px;
  `)}

  ${media.MD(css`
    width: 320px;
    height: 320px;
  `)}
`;

const social = css`
  display: flex;
  align-items: center;
  margin-top: 100px;

  ${media.LG(css`
    margin-top: 60px;
  `)}

  ${media.MD(css`
    margin-top: 20px;
  `)}
`;

const socialLine = css`
  width: 85%;
  height: 1px;
  background: #e3e2ef;
  margin-right: 40px;

  ${media.XL(
    css`
      width: 80%;
    `,
  )}

  ${media.LG(
    css`
      width: 75%;
    `,
  )}
`;

const socialItem = css`
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

  & + & {
    margin-left: 20px;
  }
`;

const project = css`
  padding: 80px 0px 80px;

  ${media.MD(css`
    padding: 60px 0px;
  `)}
`;

const projectHeader = css`
  display: flex;
  align-items: flex-end;
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

  ${media.MD(css`
    margin-bottom: 24px;

    h2 {
      margin-right: 20px;
    }

    p {
      font-size: 14px;
    }
  `)}
`;

const projectHeaderMore = css`
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

  ${media.MD(css`
    svg {
      width: 100px;
    }
  `)}
`;

const skill = css`
  padding: 100px 0px 40px;

  ${media.LG(css`
    padding: 80px 0px 20px;
  `)}

  ${media.MD(css`
    padding: 60px 0px 0px;
    margin-bottom: -40px;
  `)}
`;

const skillHeader = css`
  position: relative;
  text-align: center;

  &:before {
    position: absolute;
    content: "";
    top: -100px;
    width: 1px;
    height: 60px;
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

  ${media.MD(css`
    &:before {
      top: -80px;
      height: 52px;
    }
  `)}
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

  ${media.MD(css`
    padding: 48px 0px 48px;

    &:before {
      border-top-left-radius: 80px;
    }
  `)}
`;

const blogHeader = css`
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

  ${media.MD(css`
    margin-bottom: 24px;
  `)}
`;

const blogHeaderMore = css`
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

  ${media.MD(css`
    svg {
      width: 100px;
    }
  `)}
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

  ${media.MD(css`
    padding: 48px 0px;

    &:before {
      border-bottom-right-radius: 80px;
    }
  `)}
`;

const contactLine = css`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  border-top: 1px solid #eeeeee;
  border-top-right-radius: 100px;

  ${media.MD(css`
    border-top-right-radius: 80px;
  `)}
`;

const contactContainer = css`
  position: relative;
`;

const contactHeader = css`
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
`;

const contactBodyButton = css`
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
`;

const contactBodyIllustration = css`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);

  ${media.MD(css`
    top: 60%;
    right: 32px;
  `)}
`;

const contactBodyAnimation = css`
  width: 580px;

  ${media.MD(css`
    width: 480px;
  `)}
`;

export default Main;
