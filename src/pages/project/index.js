import PropTypes from "prop-types";
import { css } from "@emotion/react";

import MainLayout from "@/components/layout/MainLayout";
import Container from "@/components/common/Container";
import Breadcrumb from "@/components/common/Breadcrumb";
import ProjectList from "@/components/project/ProjectList";

Project.propTypes = {};

function Project() {
  return (
    <MainLayout css={projectStyle}>
      <div css={headerStyle}>
        <Container>
          <Breadcrumb items={["프로젝트"]} />
          <h3>
            개발을 통해 작은 문제를 해결하고 개선한
            <br />
            프로젝트들을 정리 했어요
          </h3>
        </Container>
      </div>
      <div css={projectListStyle}>
        <Container>
          <ProjectList />
        </Container>
      </div>
    </MainLayout>
  );
}

const projectStyle = css`
  padding: 20px 0px;
`;

const headerStyle = css`
  padding-bottom: 20px;
`;

const projectListStyle = css`
  padding: 40px 0px 60px;
`;

export default Project;
