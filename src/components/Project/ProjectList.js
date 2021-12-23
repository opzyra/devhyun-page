import PropTypes from "prop-types";
import { css } from "@emotion/react";

import ProjectItem from "@/components/project/ProjectItem";

import projects from "@/assets/data/project";

ProjectList.propTypes = {};

function ProjectList() {
  return (
    <div css={projectListStyle}>
      <div className="list">
        {projects.map((project, index) => (
          <ProjectItem project={project} key={index} />
        ))}
      </div>
    </div>
  );
}

const projectListStyle = css`
  .list {
    display: flex;
    flex-wrap: wrap;
  }

  .item {
    opacity: 1 !important;
  }

  .item + .item {
    margin-left: 40px;
  }

  .item:nth-of-type(-n + 3) {
    margin-top: 0px;
  }

  .item + .item:nth-of-type(3n + 1) {
    margin-left: 0px;
  }
`;

export default ProjectList;
