import { useCallback, useRef } from "react";
import Lottie from "react-lottie-player";
import anime from "animejs";
import { css } from "@emotion/react";

import {
  fontFamilyWithPaybooc,
  color,
  media,
  display,
  breakPoint,
} from "@/styles";

import { preFetchingQuery } from "@/library/query";
import { preFetchRecentProjects, useRecentProjects } from "@/query/project";

import MainLayout from "@/components/layout/MainLayout";
import TechStack from "@/components/main/TechStack";
import Project from "@/components/main/Project";

import Contact from "@/components/main/Contact";

import Container from "@/components/common/Container";

import Developer from "@/assets/json/developer.json";

import Github from "@/assets/svg/Github.svg";
import KakaoTalk from "@/assets/svg/KakaoTalk.svg";
import ArrowLong from "@/assets/svg/ArrowLong.svg";
import NavLink from "@/components/common/NavLink";

function Main() {
  const projectRef = useRef(null);
  const { recentProjects } = useRecentProjects();

  const handleClickProjectScroll = useCallback(() => {
    const projectInst = projectRef.current;
    anime({
      targets:
        window.document.scrollingElement ||
        window.document.body ||
        window.document.documentElement,
      scrollTop: projectInst.offsetTop + 60,
      duration: 300,
      easing: "linear",
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
            <div css={coverDescription}>
              <p css={display.not(breakPoint.M)}>
                안녕하세요
                <span>!</span>
                웹 브라우저로 사람을 연결하는 개발자 김현호 입니다.
                <br />
                다양한 환경과 개발 언어로 맞춤형 웹사이트를 구축합니다.
                <br />
                노하우가 담긴 프로젝트 작업물을 살펴보세요.
              </p>
              <p css={display.match(breakPoint.M)}>
                웹으로 사람을 연결하는 개발자 김현호 입니다.
                <br />
                다양한 환경으로 맞춤형 웹사이트를 구축합니다.
                <br />
                노하우가 담긴 프로젝트 작업물을 살펴보세요.
              </p>
            </div>
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
          <div css={coverPicto}>
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
            <a
              href="http://pf.kakao.com/_xnVJib"
              target="_blank"
              rel="noreferrer"
            >
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
            <div css={projectDescription}>
              <p css={display.not(breakPoint.M)}>
                프로젝트를 진행하면서 다져진 경험이 스며들어 있습니다.
              </p>
              <p css={display.match(breakPoint.M)}>
                프로젝트에 다양한 경험이 스며들어 있습니다.
              </p>
            </div>

            <div css={projectHeaderMore}>
              <NavLink href="/project">
                <div>
                  <span>MORE</span>
                  <ArrowLong />
                </div>
              </NavLink>
            </div>
          </div>
          <div>
            <Project projects={recentProjects} />
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
              개발에 필요한 다양한 기술<span> 스택</span>을 보유하고 있습니다.
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

      {/* <div css={blog}>
        <Container>
          <div css={blogHeader}>
            <h2>
              <span>Blog</span> Topic
            </h2>
            <p>다양한 이야기를 정성 담아 기록하고 있습니다.</p>
            <div css={blogHeaderMore}>
              <span>MORE</span>
              <ArrowLong />
            </div>
          </div>
        </Container>
        <div>
          <Blog />
        </div>
      </div> */}

      <div css={contact}>
        <div css={contactLine}></div>
        <Container css={contactContainer}>
          <Contact />
        </Container>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const props = await preFetchingQuery([preFetchRecentProjects()]);
  return props;
}

const cover = css`
  position: relative;
  height: 720px;

  &::before {
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

    &::before {
      border-bottom-right-radius: 80px;
      right: 0px;
    }
  `)}

  ${media.M(css`
    height: 340px;

    &::before {
      border-bottom-right-radius: 60px;
    }
  `)}
`;

const coverContainer = css`
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 40px 0px 0px;
  position: relative;

  ${media.MD(css`
    padding: 20px 32px;
  `)}

  ${media.M(css`
    flex-direction: column;
    align-items: flex-start;
    padding: 12px 16px;
  `)}
`;

const coverPhrase = css`
  h1 {
    font-family: ${fontFamilyWithPaybooc};
    font-weight: 900;
    line-height: 1.4;
  }

  ${media.M(css`
    h1 {
      font-size: 22px;
    }
  `)}
`;

const coverDescription = css`
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

  ${media.M(css`
    p {
      margin-top: 16px;
      font-size: 16px;
    }
  `)}
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

  ${media.M(
    css`
      margin-top: 32px;

      button {
        width: 160px;
        font-size: 14px;
        padding: 14px 0px;
      }
    `,
  )}
`;

const coverPicto = css`
  ${media.M(
    css`
      position: absolute;
      bottom: 20px;
      right: 0px;
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

  ${media.M(css`
    display: none;
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

  ${media.M(css`
    margin-top: 12px;
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

  ${media.M(
    css`
      width: 65%;
      margin-right: 20px;
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

  ${media.M(
    css`
      svg {
        width: 20px;
      }

      & + & {
        margin-left: 16px;
      }
    `,
  )}
`;

const project = css`
  padding: 80px 0px 80px;

  ${media.MD(css`
    padding: 60px 0px;
  `)}

  ${media.M(css`
    padding: 32px 0px;
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

  ${media.MD(css`
    margin-bottom: 24px;

    h2 {
      margin-right: 20px;
    }

    p {
      font-size: 14px;
    }
  `)}

  ${media.M(css`
    margin-bottom: 20px;
    align-items: flex-start;
    flex-direction: column;

    h2 {
      margin-right: 0px;
      margin-bottom: 2px;
    }

    p {
      font-size: 14px;
    }
  `)}
`;

const projectDescription = css`
  p {
    font-size: 16px;
    color: ${color.gray};
  }

  ${media.MD(css`
    p {
      font-size: 14px;
    }
  `)}

  ${media.M(css`
    p {
      font-size: 16px;
    }
  `)}
`;

const projectHeaderMore = css`
  position: absolute;
  bottom: 0px;
  right: 0px;
  cursor: pointer;

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

  ${media.M(css`
    top: 6px;
    bottom: auto;

    span {
      font-size: 10px;
      margin-right: 8px;
    }

    svg {
      width: 40px;
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

  ${media.SM(css`
    padding: 60px 0px 0px;
    margin-bottom: -100px;
  `)}
`;

const skillHeader = css`
  position: relative;
  text-align: center;

  &::before {
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
    &::before {
      top: -80px;
      height: 52px;
    }
  `)}

  ${media.M(css`
    &::before {
      top: -60px;
      height: 40px;
    }

    p span {
      display: none;
    }
  `)}
`;

const blog = css`
  padding: 80px 0px 60px;
  position: relative;

  &::before {
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

    &::before {
      border-top-left-radius: 80px;
    }
  `)}

  ${media.M(css`
    padding: 40px 0px;

    &::before {
      border-top-left-radius: 0px;
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
  }

  p {
    display: inline-block;
    font-size: 16px;
    color: ${color.gray};
  }

  ${media.MD(css`
    margin-bottom: 24px;
  `)}

  ${media.M(css`
    margin-bottom: 20px;

    h2 {
      margin-bottom: 2px;
    }
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

  ${media.M(css`
    top: 6px;
    bottom: auto;

    span {
      font-size: 10px;
      margin-right: 8px;
    }

    svg {
      width: 40px;
    }
  `)}
`;

const contact = css`
  padding: 60px 0px;
  position: relative;

  &::before {
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

  &::after {
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

    &::before {
      border-bottom-right-radius: 80px;
    }
  `)}

  ${media.M(css`
    padding: 40px 0px;

    &::before {
      border-bottom-right-radius: 60px;
    }
  `)}
`;

const contactLine = css`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100px;
  /* border-top: 1px solid #eeeeee;
  border-top-right-radius: 100px;

  ${media.MD(css`
    border-top-right-radius: 80px;
  `)}

  ${media.M(css`
    border-top-right-radius: 0px;
  `)} */
`;

const contactContainer = css`
  position: relative;
`;

export default Main;
