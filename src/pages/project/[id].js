import { css, keyframes } from "@emotion/react";
import { fontFamilyWithPaybooc, color, size } from "@/styles";

import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Image from "@/components/common/Image";
import Button from "@/components/common/Button";

import portfolio from "@/assets/data/portfolio";
import Browser from "@/assets/svg/Browser.svg";
import Responsive from "@/assets/svg/Responsive.svg";
import ArrowDiag from "@/assets/svg/ArrowDiag.svg";

function ProjectDetail({ project }) {
  return (
    <MainLayout>
      <div css={projectDetail}>
        <div css={header}>
          <div css={container}>
            <Breadcrumb items={["프로젝트", "상세정보"]} />
            <div css={headerHead}>
              <div css={headerInformation}>
                <h3>{project.title}</h3>
                <div css={headerMeta}>
                  <div css={headerMetaItem}>{project.client}</div>
                  <div css={headerMetaItem}>{project.period}</div>
                </div>
              </div>
              <div css={headerType}>
                {project.type.includes("web") && (
                  <p>
                    <Browser />
                  </p>
                )}
                {project.type.includes("responsive") && (
                  <p>
                    <Responsive />
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div css={container}>
            <div>
              <Image src={project.cover} alt="" />
            </div>
            <div css={bodyHead}>
              <div css={bodyAction}>
                {project.link && (
                  <Button
                    css={button}
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
              <div css={bodySummary}>{project.summary}</div>
              <ul css={bodyParts}>
                {project.parts.map((part, index) => (
                  <li key={index}>#{part}</li>
                ))}
              </ul>
            </div>
            <div css={bodyMockUp}>
              <Image src={project.mock} alt={project.title} center></Image>
            </div>
            <div css={bodyPage}>
              <Image src={project.page} alt={project.title} center></Image>
            </div>
            <div css={bodyFull}>
              <Image src={project.full} alt={project.title} center></Image>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

ProjectDetail.getInitialProps = async ({ query }) => {
  const { id } = query;
  const project = portfolio.find((project) => project.id === id);
  return { project };
};

const projectDetail = css`
  padding: 20px 0px;
`;

const container = css`
  width: ${size.container};
  height: 100%;
  margin: 0 auto;
`;

const header = css`
  padding-bottom: 20px;
`;

const headerHead = css`
  display: flex;
  width: 100%;
`;

const headerInformation = css`
  width: 85%;
`;

const headerMeta = css`
  display: flex;
  align-items: center;
  margin-top: 6px;
`;

const headerMetaItem = css`
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

  &:nth-of-type(1) {
    font-size: 13px;
  }

  &:nth-of-type(2) {
    font-size: 11px;
    font-family: ${fontFamilyWithPaybooc};
  }
`;

const headerType = css`
  width: 15%;
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
  }
`;

const bodyHead = css`
  margin-top: 40px;
  position: relative;
`;

const bodyAction = css`
  position: absolute;
  top: 0px;
  right: 0px;
`;

const bodySummary = css`
  word-break: keep-all;
  width: 860px;
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
`;

const bodyMockUp = css`
  margin-top: 60px;
`;

const bodyPage = css`
  margin-top: 80px;
`;

const bodyFull = css`
  margin-top: 40px;
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

export default ProjectDetail;
