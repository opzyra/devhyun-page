import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/react";
import { fontFamilyWithPaybooc, color } from "@/styles";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "@/components/common/Image";
import Button from "@/components/common/Button";

import projects from "@/assets/data/project";
import Browser from "@/assets/svg/Browser.svg";
import Responsive from "@/assets/svg/Responsive.svg";
import ArrowDiag from "@/assets/svg/ArrowDiag.svg";

ProjectDetail.propTypes = {};

function ProjectDetail({ project }) {
  return (
    <MainLayout>
      <div css={projectDetail}>
        <div css={header}>
          <Container>
            <Breadcrumb items={["프로젝트", "상세정보"]} />
            <div className="head">
              <div className="information">
                <h3>{project.title}</h3>
                <div className="meta">
                  <div className="item client">{project.client}</div>
                  <div className="item period">{project.period}</div>
                </div>
              </div>
              <div className="type">
                {project.type.includes("web") && (
                  <div className="round">
                    <Browser />
                  </div>
                )}
                {project.type.includes("responsive") && (
                  <div className="round">
                    <Responsive />
                  </div>
                )}
              </div>
            </div>
          </Container>
        </div>
        <div css={cover}>
          <Container>
            <div className="cover">
              <Image src={project.cover} alt="" />
            </div>
            <div className="head">
              <div className="action">
                {project.link && (
                  <Button
                    css={goToWebButton}
                    type="default"
                    shape="round"
                    size="large"
                    href={project.link}
                    target
                  >
                    <span>홈페이지 방문</span>
                    <ArrowDiag />
                  </Button>
                )}
              </div>
              <div className="summary">{project.summary}</div>
              <ul className="parts">
                {project.parts.map((part, index) => (
                  <li key={index}>#{part}</li>
                ))}
              </ul>
            </div>
            <div className="mockup">
              <Image src={project.mock} alt={project.title} center></Image>
            </div>
            <div className="page">
              <Image src={project.page} alt={project.title} center></Image>
            </div>
            <div className="full">
              <Image src={project.full} alt={project.title} center></Image>
            </div>
          </Container>
        </div>
      </div>
    </MainLayout>
  );
}

ProjectDetail.getInitialProps = async ({ query }) => {
  const { id } = query;
  const project = projects.find((project) => project.id === id);
  return { project };
};

const projectDetail = css`
  padding: 20px 0px;
`;

const header = css`
  padding-bottom: 20px;

  .head {
    display: flex;
    width: 100%;
  }

  .information {
    width: 85%;

    .meta {
      display: flex;
      align-items: center;
      margin-top: 6px;
    }

    .item {
      position: relative;

      & + .item {
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

      &.client {
        font-size: 13px;
      }

      &.period {
        font-size: 11px;
        font-family: ${fontFamilyWithPaybooc};
      }
    }
  }

  .type {
    width: 15%;
    display: flex;
    justify-content: flex-end;
    align-items: flex-start;

    svg {
      fill: ${color.brand};
      width: 36px;
      height: 36px;
    }

    .round {
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      width: 64px;
      height: 64px;
      background: #f5f5f5;
      margin: 0px 8px;
    }
  }
`;

const cover = css`
  padding: 8px 0px 60px;

  .head {
    margin-top: 40px;
    position: relative;

    .action {
      position: absolute;
      top: 0px;
      right: 0px;
    }

    .summary {
      word-break: keep-all;
      width: 860px;
    }

    ul.parts {
      margin-top: 20px;

      li {
        display: inline-block;
        font-size: 14px;
        font-family: ${fontFamilyWithPaybooc};

        & + li {
          margin-left: 6px;
        }
      }
    }
  }

  .mockup {
    margin-top: 60px;
  }

  .page {
    margin-top: 80px;
  }

  .full {
    margin-top: 40px;
  }
`;

const goToWebButtonKeyframe = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(3px) translateY(-2px);
  }
`;

const goToWebButton = css`
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
    animation: ${goToWebButtonKeyframe} 0.5s ease-in forwards;
  }

  span {
    margin-right: 6px;
  }

  svg {
    width: 12px;
    transition: 0.3s;
  }
`;

export default ProjectDetail;
