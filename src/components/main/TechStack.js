import { useCallback, useRef, useState } from "react";
import { css } from "@emotion/react";
import { Waypoint } from "react-waypoint";
import anime from "animejs";
import Lottie from "react-lottie-player";

import { media, zIndex, breakPoint } from "@/styles";

import Computer from "@/assets/json/computer.json";

import stacks from "@/assets/data/stack";
import { useEffect } from "react/cjs/react.development";

function TechStack() {
  const animeRef = useRef(null);

  const [ratio, setRatio] = useState(1);

  const handleResize = () => {
    const width = window.innerWidth;
    let ratio = 1;

    if (width < breakPoint.XL && width >= breakPoint.LG) {
      ratio = 0.86;
    }

    if (width < breakPoint.LG && width >= breakPoint.MD) {
      ratio = 0.75;
    }

    if (width < breakPoint.MD && width >= breakPoint.M) {
      ratio = 0.58;
    }

    setRatio(ratio);
  };

  const handleEnterStack = useCallback(() => {
    let animeInst = animeRef.current;
    if (!animeInst.completed) {
      animeInst.play();
      return;
    }
  }, [animeRef, ratio]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    let restart = !!animeRef.current;
    animeRef.current = anime({
      targets: document.querySelectorAll("#skillRef .techStackItem"),
      translateX: (el, i) => {
        const x = stacks[i].x;
        return x > 0 ? Math.abs(x) * ratio : Math.abs(x) * -ratio;
      },
      translateY: (el, i) => {
        const y = stacks[i].y;
        return y > 0 ? Math.abs(y) * ratio : Math.abs(y) * -ratio;
      },
      duration: (el, i) => {
        return stacks[i].duration;
      },
      scale: (el, i) => {
        const y = stacks[i].scale;
        return y * ratio;
      },
      delay: restart ? 0 : 300,
      opacity: 1,
      autoplay: false,
    });

    if (restart) {
      animeRef.current.play();
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [ratio]);

  return (
    <div css={techStack} id="skillRef">
      {stacks.map(({ Icon }, index) => (
        <div className="techStackItem" css={techStackItem} key={index}>
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
  height: 720px;

  ${media.XL(css`
    height: 640px;
  `)}

  ${media.LG(css`
    height: 600px;
  `)}

  ${media.MD(css`
    height: 520px;
  `)}
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
  width: 720px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);

  ${media.XL(css`
    width: 680px;
  `)}

  ${media.LG(css`
    width: 620px;
  `)}

  ${media.MD(css`
    bottom: 88px;
    width: 440px;
  `)}
`;

export default TechStack;
