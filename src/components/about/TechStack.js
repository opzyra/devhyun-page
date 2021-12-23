import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { zIndex } from "@/styles";

import { useRef } from "react";
import { Waypoint } from "react-waypoint";

import anime from "animejs";
import Lottie from "react-lottie-player";

import Computer from "@/assets/json/computer.json";

import stacks from "@/assets/data/stack";

TechStack.propTypes = {};

function TechStack() {
  const skillRef = useRef(null);
  const animeRef = useRef(null);

  const handleEnterStack = () => {
    let animeInst = animeRef.current;
    if (!animeInst) {
      animeRef.current = anime
        .timeline({
          targets: skillRef.current.querySelectorAll(".item"),
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

  const handleLeaveStack = () => {
    const animeInst = animeRef.current;
    animeInst.delay = 0;
    animeInst.reverse();
    animeInst.play();
  };

  return (
    <div css={techStackStyle} ref={skillRef}>
      {stacks.map(({ Icon }, index) => (
        <div className="item" key={index}>
          {<Icon />}
        </div>
      ))}
      <Waypoint onEnter={handleEnterStack}>
        <div className="computer">
          <Lottie loop play className="animation" animationData={Computer} />
        </div>
      </Waypoint>
    </div>
  );
}

const techStackStyle = css`
  position: relative;

  .item {
    z-index: ${zIndex.LEVEL_3};
    position: absolute;
    bottom: 180px;
    left: 50%;
    transform: translateX(-50%) scale(0);
    opacity: 0;
  }

  .item svg {
    width: 64px;
    overflow: hidden;
  }

  .computer {
    width: 780px;
    margin: 0 auto;
    margin-top: 280px;
  }
`;

export default TechStack;
