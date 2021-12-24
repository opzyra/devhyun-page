import PropTypes from "prop-types";
import { css } from "@emotion/react";

import ProjectItem from "@/components/project/ProjectItem";

import projects from "@/assets/data/project";

ProjectList.propTypes = {};

function ProjectList() {
  return (
    <div css={projectList}>
      {projects.map((project, index) => (
        <ProjectItem css={projectItem} project={project} key={index} />
      ))}
    </div>
  );
}

const projectList = css`
  display: flex;
  flex-wrap: wrap;
`;

const projectItem = css`
  opacity: 1 !important;

  & + & {
    margin-left: 40px;
  }

  &:nth-of-type(-n + 3) {
    margin-top: 0px;
  }

  & + &:nth-of-type(3n + 1) {
    margin-left: 0px;
  }
`;

export default ProjectList;
