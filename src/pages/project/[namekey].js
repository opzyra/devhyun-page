import { useEffect } from "react";
import { useRouter } from "next/router";
import { css, keyframes } from "@emotion/react";
import moment from "moment";

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

import Browser from "@/assets/svg/Browser.svg";
import Responsive from "@/assets/svg/Responsive.svg";
import ArrowDiag from "@/assets/svg/ArrowDiag.svg";

function ProjectDetail() {
  const router = useRouter();
  const { namekey } = router.query;
  const { project } = useProject({ namekey });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wow.js");
      new WOW().init({ live: false });
    }
  }, []);

  return (
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
                  <p>
                    <Browser />
                  </p>
                )}
                {project.types.includes("responsive") && (
                  <p>
                    <Responsive />
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
                data-wow-delay="0.8s"
              >
                {project.hyperLink && (
                  <Button
                    css={button}
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
            <div className="layout wow fadeInUp" data-wow-duration="2s">
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
      </div>
    </MainLayout>
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
    padding: 12px 0px;
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

const buttonKeyframe = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(3px) translateY(-2px);
  }
`;

const button = css`
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
    animation: ${buttonKeyframe} 0.5s ease-in forwards;
  }

  span {
    margin-right: 6px;
  }

  svg {
    width: 12px;
    transition: 0.3s;
  }
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
`;

export default ProjectDetail;
