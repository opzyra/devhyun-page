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

import IconRocket from "@/assets/images/icon-rocket.png";
import IconCode from "@/assets/images/icon-code.png";
import IconLayout from "@/assets/images/icon-layout.png";

import ImageLayout from "@/assets/project/aboutperiod/image-layout.png";
import ImageMockup from "@/assets/project/aboutperiod/image-mockup.png";

import Browser from "@/assets/svg/Browser.svg";
import Responsive from "@/assets/svg/Responsive.svg";
import ArrowDiag from "@/assets/svg/ArrowDiag.svg";

const NAME_KEY = "aboutperiod";

function ProjectDetail() {
  const { project } = useProject({ namekey: NAME_KEY });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const WOW = require("wow.js");
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
        <div css={section}>
          <Container>
            <div className="wow fadeIn mockup">
              <Image
                src={ImageMockup}
                objectFit="contain"
                alt=""
                container
                center
              />
            </div>
            <div className="description">
              <div className="title">
                <div className="icon wow fadeIn">
                  <Image src={IconRocket} alt="" />
                </div>
                <div className="wow fadeInUp" data-wow-duration="2s">
                  <h4>Overview</h4>
                  <p>About this project</p>
                </div>
              </div>
              <div className="contents wow fadeInUp" data-wow-duration="2s">
                <h4>더 많은 사람들의 더 나은달을 위하여</h4>
                <p>
                  어바웃피리어드는 월경 기간 혹은 한달 주기의 호르몬 변화로 인해
                  겪는 많은 고통과 불편함에 공감하며 사람들이 무엇을 필요로하고,
                  사람들에게 어떤 도움이 필요한 지를 조사하고 연구하여 월경에
                  초점을 맞춘 제품과 서비스를 제공하는 스타트업 입니다.
                </p>
              </div>
            </div>
          </Container>
        </div>
        <div css={section}>
          <Container>
            <div className="mockup wow fadeInUp" data-wow-duration="2s">
              <Image
                src={ImageLayout}
                objectFit="contain"
                alt=""
                container
                center
              />
            </div>
            <div className="description">
              <div className="title">
                <div className="icon wow fadeIn">
                  <Image src={IconLayout} alt="" />
                </div>
                <div className="wow fadeInUp" data-wow-duration="2s">
                  <h4>Layout</h4>
                  <p>Built with brand concept</p>
                </div>
              </div>
              <div className="contents wow fadeInUp" data-wow-duration="2s">
                <p>
                  어바웃피리어드는 월경 기간 혹은 한달 주기의 호르몬 변화로 인해
                  겪는 많은 고통과 불편함에 공감하,며 사람들이 무엇을
                  필요로하고, 사람들에게 어떤 도움이 필요한 지를 조사하고
                  연구하여 월경에 초점을 맞춘 제품과 서비스를 제공하는 스타트업
                  입니다.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </MainLayout>
  );
}

export const getServerSideProps = async () => {
  let props = await preFetchingQuery([preFetchProject({ namekey: NAME_KEY })]);

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

const section = css`
  & + & {
    margin-top: 160px;
  }

  .mockup {
    margin-bottom: 40px;

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

      h4 {
        margin-top: 4px;
        font-weight: 900;
        margin-bottom: 16px;
      }

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

export default ProjectDetail;
