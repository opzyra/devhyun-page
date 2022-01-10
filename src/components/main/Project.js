import { useRef } from "react";

import anime from "animejs";
import ScrollTrigger from "react-scroll-trigger";

import { css } from "@emotion/react";
import { media } from "@/styles";

import ProjectItem from "@/components/project/ProjectItem";

function Project({ portfolios }) {
  const animeRef = useRef(null);
  const handleProgress = ({ velocity }) => {
    let animeInst = animeRef.current;
    if (velocity >= 1 && !animeInst) {
      animeRef.current = anime
        .timeline({
          targets: document.querySelectorAll(`.projectGrid > div`),
        })
        .add({
          translateY: [100, 0],
          duration: 500,
          easing: "easeInOutQuad",
          delay: function (el, i) {
            return i * 300;
          },
          opacity: 1,
        });
      return;
    }
  };

  return (
    <div css={project}>
      <ScrollTrigger onProgress={handleProgress}>
        <div className="projectGrid">
          {portfolios.map((project, index) => (
            <ProjectItem css={projectItem} project={project} key={index} />
          ))}
        </div>
      </ScrollTrigger>
    </div>
  );
}

const project = css`
  .projectGrid {
    display: flex;
    flex-wrap: wrap;
    margin: -20px;

    ${media.M(
      css`
        margin: -16px;
      `,
    )}
  }
`;

const projectItem = css`
  width: calc(33.333% - 40px);
  margin: 20px;

  ${media.LG(
    css`
      width: calc(50% - 40px);
    `,
  )}

  ${media.M(
    css`
      margin: 16px;
      width: 100%;
    `,
  )}
`;

export default Project;
