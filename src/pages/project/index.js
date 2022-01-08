import { css } from "@emotion/react";
import { media } from "@/styles";

import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProjectGrid from "@/components/project/ProjectGrid";

function Project() {
  return (
    <MainLayout css={project}>
      <div css={header}>
        <div css={container}>
          <Breadcrumb items={["프로젝트"]} />
          <h3>
            개발을 통해 작은 문제를 해결하고 개선한
            <br />
            프로젝트들을 정리 했어요
          </h3>
        </div>
      </div>
      <div css={body}>
        <div css={container}>
          <ProjectGrid />
        </div>
      </div>
    </MainLayout>
  );
}

const project = css`
  padding: 20px 0px;
`;

const header = css`
  padding-bottom: 20px;
`;

const container = css`
  width: 1280px;
  height: 100%;
  margin: 0 auto;

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
`;

const body = css`
  padding: 40px 0px 60px;
`;

export default Project;
