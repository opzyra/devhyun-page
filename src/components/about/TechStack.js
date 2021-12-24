import { useRef } from "react";
import { css } from "@emotion/react";
import { Waypoint } from "react-waypoint";
import anime from "animejs";
import Lottie from "react-lottie-player";

import { zIndex } from "@/styles";

import Computer from "@/assets/json/computer.json";

import stacks from "@/assets/data/stack";

function TechStack() {
  const skillRef = useRef(null);
  const animeRef = useRef(null);

  const handleEnterStack = () => {
    let animeInst = animeRef.current;
    if (!animeInst) {
      animeRef.current = anime
        .timeline({
          targets: skillRef.current.querySelectorAll(
            `.css-${techStackItem.name}`,
          ),
        })
        .add({
          translateX: function (_, i) {
            return stacks[i].x;
          },
          translateY: function (_, i) {
            return stacks[i].y;
          },
          duration: function (_, i) {
            return stacks[i].duration;
          },
          scale: function (_, i) {
            return stacks[i].scale;
          },
          delay: 300,
          opacity: 1,
        })
        .play();
      return;
    }
  };

  return (
    <div css={techStack} ref={skillRef}>
      {stacks.map(({ Icon }, index) => (
        <div css={techStackItem} key={index}>
          {<Icon />}
        </div>
      ))}
      <div css={computer}>
        <Waypoint onEnter={handleEnterStack}>
          <div>
            <Lottie loop play animationData={Computer} />
          </div>
        </Waypoint>
      </div>
    </div>
  );
}

const techStack = css`
  position: relative;
`;

const techStackItem = css`
  z-index: ${zIndex.LEVEL_3};
  position: absolute;
  bottom: 180px;
  left: 50%;
  transform: translateX(-50%) scale(0);
  opacity: 0;

  svg {
    width: 64px;
    overflow: hidden;
  }
`;

const computer = css`
  width: 780px;
  margin: 0 auto;
  margin-top: 280px;
`;

export default TechStack;
