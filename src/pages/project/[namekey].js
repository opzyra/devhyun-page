import { useEffect } from "react";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import { css, keyframes } from "@emotion/react";
import moment from "moment";
import tippy from "tippy.js";

import {
  fontFamilyWithPaybooc,
  color,
  media,
  fontFamilyWithRoboto,
} from "@/styles";

import { preFetchingQuery } from "@/library/query";
import { preFetchProject, useProject } from "@/query/project";

import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import Image from "@/components/common/Image";
import Button from "@/components/common/Button";

import IconWebapp from "@/assets/svg/Webapp.svg";
import IconCustomizing from "@/assets/svg/Customizing.svg";
import IconPublishing from "@/assets/svg/Publishing.svg";
import IconFrontend from "@/assets/svg/Frontend.svg";

import ArrowDiag from "@/assets/svg/ArrowDiag.svg";
import ArrowLeft from "@/assets/svg/ArrowLeft.svg";

function ProjectDetail() {
  const router = useRouter();
  const { namekey } = router.query;
  const { project } = useProject({ namekey });

  const handleClickList = () => {
    router.back();
  };

  const seoDescriptionParsing = (overview) => {
    if (!overview) return "";
    let str = overview
      .join("")
      .replace(/<br\/>/g, "")
      .replace(/\n|\r/g, "")
      .replace(/ +(?= )/g, "");

    return str.substring(0, 120);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      history.scrollRestoration = "manual";
      const WOW = require("wow.js");
      new WOW().init({ live: true });

      tippy("[data-tippy-content]", {
        arrow: true,
        duration: 1000,
        theme: "brand",
        placement: "bottom",
        animation: "shift-away",
      });
    }
  }, []);

  return (
    <>
      <NextSeo
        title={`${project.seo} - ${process.env.NEXT_PUBLIC_SEO_TITLE}`}
        description={seoDescriptionParsing(project.overview)}
        canonical={`${process.env.NEXT_PUBLIC_SEO_URL}/project/${namekey}`}
        openGraph={{
          url: `${process.env.NEXT_PUBLIC_SEO_URL}/project/${namekey}`,
          site_name: `${project.title} - ${process.env.NEXT_PUBLIC_SEO_TITLE}`,
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
      />
      <MainLayout>
        <div css={projectDetail}>
          <div css={header}>
            <Container>
              <Breadcrumb items={["프로젝트", "상세정보"]} />
              <div css={headerHead}>
                <div css={headerInformation}>
                  <h3>{project.title}</h3>
                  <div css={headerMeta}>
                    <div css={headerMetaItem}>{project.client}</div>
                    <div css={headerMetaItem}>
                      {moment(project.period).format("YYYY.MM")}
                    </div>
                  </div>
                </div>
                <div css={headerType}>
                  {project.types.includes("web") && (
                    <p data-tippy-content="홈페이지">
                      <IconWebapp />
                    </p>
                  )}
                  {project.types.includes("platform") && (
                    <p data-tippy-content="플랫폼">
                      <IconCustomizing />
                    </p>
                  )}
                  {project.types.includes("system") && (
                    <p data-tippy-content="시스템">
                      <IconCustomizing />
                    </p>
                  )}
                  {project.types.includes("publishing") && (
                    <p data-tippy-content="퍼블리싱">
                      <IconPublishing />
                    </p>
                  )}
                  {project.types.includes("frontend") && (
                    <p data-tippy-content="프론트엔드">
                      <IconFrontend />
                    </p>
                  )}
                </div>
              </div>
            </Container>
          </div>
          <div css={mockup}>
            <Container>
              <div className="mockup wow fadeIn">
                <Image
                  src={project.mockup}
                  objectFit="contain"
                  alt=""
                  priority={true}
                  container
                  center
                />
              </div>
              <div className="description">
                <div className="title">
                  <div className="wow fadeInUp" data-wow-duration="2s">
                    <h4>Overview</h4>
                    <p>About this project</p>
                  </div>
                </div>
                <div className="contents wow fadeInUp" data-wow-duration="3s">
                  {project.overview?.map((overview, index) => (
                    <p
                      dangerouslySetInnerHTML={{ __html: overview }}
                      key={index}
                    ></p>
                  ))}
                </div>

                <div
                  className="link wow fadeInUp"
                  data-wow-duration="2s"
                  data-wow-delay="0.6s"
                >
                  {project.hyperLink && (
                    <Button
                      css={linkButton}
                      type="default"
                      shape="round"
                      size="large"
                      href={project.hyperLink}
                      target
                    >
                      <span>홈페이지 방문</span>
                      <ArrowDiag />
                    </Button>
                  )}
                </div>
              </div>
            </Container>
          </div>
          <div css={layout}>
            <Container>
              <div
                className="layout wow fadeInUp"
                data-wow-duration="2s"
                data-wow-delay="0.3s"
              >
                <Image
                  src={project.layout}
                  objectFit="contain"
                  alt=""
                  priority={true}
                  container
                  center
                />
              </div>
            </Container>
          </div>
          <div css={screen}>
            <Container>
              {project.screen.desktop.map((image, index) => (
                <div
                  className="box wow fadeInUp"
                  data-wow-delay="0.3s"
                  data-wow-duration="2s"
                  key={index}
                >
                  <div className="item">
                    <Image src={image} objectFit="contain" alt="" />
                  </div>
                </div>
              ))}
              {project.screen.mobile.length !== 0 && (
                <div
                  className="box wow fadeIn"
                  data-wow-duration="2s"
                  data-wow-delay="1s"
                >
                  <div className="mobile">
                    {project.screen.mobile.map((image, index) => (
                      <div className="item" key={index}>
                        <Image src={image} objectFit="contain" alt="" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </Container>
          </div>
          <div css={actions}>
            <Container>
              <div className="buttons">
                <Button
                  css={listButton}
                  type="default"
                  shape="round"
                  size="large"
                  onClick={handleClickList}
                >
                  <ArrowLeft />
                  <span>목록 보기</span>
                </Button>
              </div>
            </Container>
          </div>
        </div>
      </MainLayout>
    </>
  );
}

export const getServerSideProps = async ({ query }) => {
  const { namekey } = query;
  let props = await preFetchingQuery([preFetchProject({ namekey })]);

  return props;
};

const projectDetail = css`
  padding: 20px 0px 120px;
  ${media.M(css`
    padding: 12px 0px 48px;
  `)}
`;

const header = css`
  padding-bottom: 20px;

  ${media.M(css`
    padding-bottom: 12px;
  `)}
`;

const headerHead = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  ${media.M(css`
    display: block;
  `)}
`;

const headerInformation = css`
  width: 85%;

  ${media.M(css`
    width: 100%;
  `)}
`;

const headerMeta = css`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

const headerMetaItem = css`
  position: relative;

  & + & {
    margin-left: 12px;
  }

  & + .item::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -8px;
    width: 1px;
    height: 70%;
    transform: translateY(-50%);
    background: #8a8a8a;
  }

  &:nth-of-type(1) {
    font-size: 13px;
  }

  &:nth-of-type(2) {
    font-size: 11px;
    font-family: ${fontFamilyWithPaybooc};
  }
`;

const headerType = css`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;

  svg {
    fill: ${color.brand};
    width: 36px;
    height: 36px;
  }

  p {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 64px;
    height: 64px;
    background: #f5f5f5;
    margin: 0px 8px;
    cursor: pointer;

    &:last-of-type {
      margin-right: 0px;
    }
  }

  ${media.M(css`
    position: absolute;
    bottom: 0px;
    right: 0px;

    p {
      width: 40px;
      height: 40px;
      margin: 0px 4px;
    }

    svg {
      width: 20px;
      height: 20px;
    }
  `)}
`;

const linkButtonKeyframe = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(3px) translateY(-2px);
  }
`;

const linkButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamilyWithPaybooc};
  padding: 14px 24px;

  &:hover {
    background: ${color.font};
    color: #ffffff;
  }

  &:hover svg {
    fill: #ffffff;
    animation: ${linkButtonKeyframe} 0.5s ease-in forwards;
  }

  ${media.M(css`
    padding: 12px 18px;

    span {
      font-size: 14px;
    }
  `)}
`;

const mockup = css`
  .mockup {
    margin: 40px 0px;

    .image {
      width: 80%;
    }
  }

  .description {
    text-align: center;

    .title {
      font-family: ${fontFamilyWithRoboto};
      margin-bottom: 20px;

      .icon {
        margin: 0 auto;
        width: 48px;
        height: 48px;
        margin-bottom: 4px;
      }

      h4 {
        font-weight: 500;
      }

      p {
        font-size: 14px;
      }
    }

    .contents {
      font-size: 16px;
      max-width: 880px;
      margin: 0 auto;

      p {
        word-break: keep-all;
        color: #757384;
      }

      p + p {
        margin-top: 20px;
      }
    }

    .link {
      margin-top: 40px;
      display: flex;
      justify-content: center;
    }
  }

  ${media.M(css`
    .mockup {
      margin: 32px 0px;

      .image {
        width: 100%;
      }
    }

    .description {
      .contents {
        text-align: left;

        br {
          display: none;
        }
      }

      .link {
        margin-top: 32px;
      }
    }
  `)}
`;

const layout = css`
  margin-top: 160px;

  .layout {
    margin-bottom: 40px;
  }

  .description {
    text-align: center;

    .title {
      font-family: ${fontFamilyWithRoboto};
      margin-bottom: 20px;

      .icon {
        margin: 0 auto;
        width: 48px;
        height: 48px;
        margin-bottom: 4px;
      }

      h4 {
        font-weight: 500;
      }

      p {
        font-size: 14px;
      }
    }

    .contents {
      font-size: 16px;
      max-width: 880px;
      margin: 0 auto;

      p {
        word-break: keep-all;
        color: #757384;
      }

      p + p {
        margin-top: 20px;
      }
    }
  }

  ${media.M(css`
    margin-top: 80px;

    .layout {
      margin-bottom: 20px;
    }
  `)}
`;

const screen = css`
  margin-top: 140px;
  overflow: hidden;

  .box {
    background: #f5f5f5;
    padding: 60px;
    font-size: 0px;
    display: flex;
    flex-wrap: wrap;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 24px;
      left: 24px;
      width: 1px;
      height: 36px;
      background: #dddddd;
      transform: rotate(-45deg) translateX(12px);
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 24px;
      right: 24px;
      width: 1px;
      height: 36px;
      background: #dddddd;
      transform: rotate(-45deg) translateX(-12px);
    }

    .image {
      border: 1px solid #dddddd;
    }

    & + .box {
      margin-top: 80px;
    }

    .mobile {
      display: flex;
      flex-wrap: wrap;
      margin: -16px;
      max-height: 2460px;
      overflow: hidden;

      .item {
        margin: 16px;
        width: calc(33.333% - 32px);
      }
    }
  }

  ${media.M(css`
    margin-top: 32px;

    .box {
      padding: 16px;

      &::after {
        top: 22px;
        left: -10px;
        height: 8px;
        transform: rotate(-45deg) translateX(24px);
      }

      &::before {
        bottom: 22px;
        right: -10px;
        height: 8px;
        transform: rotate(-45deg) translateX(-24px);
      }

      & + .box {
        margin-top: 32px;
      }

      .mobile {
        display: flex;
        flex-wrap: wrap;
        margin: -16px;
        max-height: initial;
        overflow: auto;

        .item {
          width: 100%;
        }
      }
    }
  `)}
`;

const actions = css`
  margin-top: 60px;

  .buttons {
    display: flex;
    justify-content: center;

    button + button {
      margin-left: 12px;
    }
  }

  ${media.M(css`
    margin-top: 40px;
  `)}
`;

const listButtonKeyframe = keyframes`
  from {
    transform: rotate(180deg) translateX(0px);
  }
  to {
    transform: rotate(180deg) translateX(3px) translateY(0px);
  }
`;

const listButton = css`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${fontFamilyWithPaybooc};
  padding: 14px 24px;

  &:hover {
    background: ${color.font};
    color: #ffffff;
  }

  &:hover svg {
    fill: #ffffff;
    animation: ${listButtonKeyframe} 0.5s ease-in forwards;
  }

  ${media.M(css`
    padding: 12px 18px;

    span {
      font-size: 14px;
    }
  `)}
`;

export default ProjectDetail;
