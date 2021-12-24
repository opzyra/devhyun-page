import PropTypes from "prop-types";
import { css } from "@emotion/react";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProjectList from "@/components/project/ProjectList";

Project.propTypes = {};

function Project() {
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
      <div css={projectList}>
        <Container>
          <ProjectList />
        </Container>
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

const projectList = css`
  padding: 40px 0px 60px;
`;

export default Project;
