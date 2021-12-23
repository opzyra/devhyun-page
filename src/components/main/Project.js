import PropTypes from "prop-types";
import { css } from "@emotion/react";

import { useRef } from "react";
import { Waypoint } from "react-waypoint";
import anime from "animejs";

import ProjectItem from "@/components/project/ProjectItem";

import projects from "@/assets/data/project";

Project.propTypes = {};

function Project() {
  const projectRef = useRef(null);
  const animeRef = useRef(null);

  const handleEnterStack = () => {
    let animeInst = animeRef.current;
    if (!animeInst) {
      animeRef.current = anime
        .timeline({
          targets: projectRef.current.querySelectorAll(".item"),
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
    <div css={projectStyle}>
      <Waypoint onEnter={handleEnterStack}>
        <div className="list" ref={projectRef}>
          {projects
            .filter((project) => project.display)
            .map((project, index) => (
              <ProjectItem project={project} key={index} />
            ))}
        </div>
      </Waypoint>
    </div>
  );
}

const projectStyle = css`
  .list {
    display: flex;
    flex-wrap: wrap;
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

export default Project;
