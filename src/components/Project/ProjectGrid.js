import { css } from "@emotion/react";

import ProjectItem from "@/components/project/ProjectItem";

import portfolio from "@/assets/data/portfolio";
import { media } from "@/styles";

function ProjectGrid() {
  return (
    <div css={projectGrid}>
      {portfolio.map((project, index) => (
        <ProjectItem css={projectItem} project={project} key={index} />
      ))}
    </div>
  );
}

const projectGrid = css`
  display: flex;
  flex-wrap: wrap;
  margin: -20px;
`;

const projectItem = css`
  width: calc(33.333% - 40px);
  margin: 20px;
  opacity: 1 !important;

  ${media.LG(
    css`
      width: calc(50% - 40px);
    `,
  )}

  ${media.M(
    css`
      width: 100%;
    `,
  )}
`;

export default ProjectGrid;
