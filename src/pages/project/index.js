import { css } from "@emotion/react";
import { media } from "@/styles";

import { preFetchingQuery } from "@/library/query";
import { preFetchPortfolios, usePortfolios } from "@/query/portfolio";

import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import ProjectGrid from "@/components/project/ProjectGrid";

function Project() {
  const { portfolios } = usePortfolios();

  return (
    <MainLayout css={project}>
      <div css={header}>
        <Container>
          <Breadcrumb items={["프로젝트"]} />
          <h3>
            개발을 통해 작은 문제를 해결하고 개선한
            <br />
            프로젝트들을 정리 했어요
          </h3>
        </Container>
      </div>
      <div css={body}>
        <Container>
          <ProjectGrid portfolios={portfolios} />
        </Container>
      </div>
    </MainLayout>
  );
}

export async function getServerSideProps() {
  const props = await preFetchingQuery([preFetchPortfolios()]);
  return props;
}

const project = css`
  padding: 20px 0px;

  ${media.M(css`
    padding: 12px 0px;
  `)}
`;

const header = css`
  padding-bottom: 20px;
`;

const body = css`
  padding: 28px 0px 60px;

  ${media.LG(css`
    padding: 20px 0px 60px;
  `)}

  ${media.MD(css`
    padding: 12px 0px 60px;
  `)}

  ${media.M(css`
    padding: 0px 0px 40px;
  `)}
`;

export default Project;
