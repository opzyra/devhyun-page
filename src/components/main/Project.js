import { useRef } from "react";
import { css } from "@emotion/react";

import anime from "animejs";
import { Waypoint } from "react-waypoint";

import ProjectItem from "@/components/project/ProjectItem";

import portfolio from "@/assets/data/portfolio";

function Project() {
  const animeRef = useRef(null);

  const handleEnterStack = () => {
    let animeInst = animeRef.current;
    if (!animeInst) {
      animeRef.current = anime
        .timeline({
          targets: document.querySelectorAll(`.projectGrid > div`),
        })
        .add({
          translateY: [100, 0],
          duration: 500,
          easing: "easeInOutQuad",
          delay: function (el, i, l) {
            return i * 300;
          },
          opacity: 1,
        });
      return;
    }
  };

  return (
    <div css={project}>
      <Waypoint onEnter={handleEnterStack}>
        <div className="projectGrid">
          {portfolio
            .filter((project) => project.display)
            .map((project, index) => (
              <ProjectItem css={projectItem} project={project} key={index} />
            ))}
        </div>
      </Waypoint>
    </div>
  );
}

const project = css`
  .projectGrid {
    display: flex;
    flex-wrap: wrap;
  }
`;

const projectItem = css`
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

export default Project;
