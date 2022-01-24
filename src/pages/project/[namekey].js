import { css, keyframes } from "@emotion/react";
import moment from "moment";

import { fontFamilyWithPaybooc, color, media } from "@/styles";

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
import { useRouter } from "next/router";
import { useEffect } from "react";

function ProjectDetail() {
  const router = useRouter();
  const { namekey } = router.query;
  const { project } = useProject({ namekey });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wow.js");
      console.log(WOW);
      new WOW().init();
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
        <div css={cover}>
          <Container>
            <div>
              <Image
                src={project.cover}
                alt=""
                width="1280px"
                height="360px"
                layout="responsive"
                objectFit="cover"
                priority={true}
              />
            </div>
            <div css={bodyHead}>
              <div css={bodySummary}>{project.description}</div>
              <ul css={bodyParts}>
                {project.parts.split(",").map((part, index) => (
                  <li key={index}>#{part}</li>
                ))}
              </ul>
              <div css={bodyAction}>
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

        <div css={sections}>
          {project.sections?.map((section, index) => (
            <div
              className="section"
              css={section.container && container}
              key={index}
            >
              {section.image && (
                <div className="wow fadeInUp" data-wow-duration="1.5s">
                  <Image
                    src={section.image}
                    width={8}
                    height={4}
                    alt=""
                    layout="responsive"
                    objectFit="contain"
                    priority
                    center
                  />
                </div>
              )}
              {section.text && (
                <div className="wow fadeInUp" data-wow-duration="1.5s">
                  <h5>{section.text.title}</h5>
                  <p>{section.text.description}</p>
                </div>
              )}
            </div>
          ))}
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
  padding: 20px 0px;
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

const bodyHead = css`
  margin-top: 28px;
  position: relative;

  ${media.LG(css`
    margin-top: 20px;
  `)}

  ${media.MD(css`
    margin-top: 16px;
  `)}
`;

const bodyAction = css`
  position: absolute;
  top: 0px;
  right: 0px;

  ${media.MD(css`
    top: auto;
    bottom: -64px;
    left: 50%;
    transform: translateX(-50%);

    button {
      margin: 0 auto;
      padding: 12px 16px;
      font-size: 12px;

      svg {
        width: 10px;
      }
    }
  `)}
`;

const bodySummary = css`
  word-break: keep-all;
  width: 860px;

  ${media.LG(
    css`
      width: 75%;
    `,
  )}

  ${media.M(
    css`
      width: 100%;
    `,
  )}
`;

const bodyParts = css`
  margin-top: 20px;

  li {
    display: inline-block;
    font-size: 14px;
    font-family: ${fontFamilyWithPaybooc};

    & + li {
      margin-left: 6px;
    }
  }

  ${media.M(
    css`
      margin-top: 12px;

      li {
        font-size: 12px;
      }
    `,
  )}
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

const cover = css``;

const container = css`
  width: 1280px;
  margin: 0 auto;
  height: 100%;

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

  ${media.MD(css`
    width: 100%;
    padding: 0px 36px;
  `)}

  ${media.M(css`
    width: 100%;
    padding: 0px 16px;
  `)}
`;

const sections = css`
  padding: 40px 0px;

  .section + .section {
    margin-top: 60px;
  }
`;

export default ProjectDetail;
