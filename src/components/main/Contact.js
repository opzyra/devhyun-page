import Lottie from "react-lottie-player";

import { css } from "@emotion/react";
import {
  fontFamilyWithPaybooc,
  color,
  media,
  display,
  breakPoint,
} from "@/styles";

import Button from "@/components/common/Button";

import Process from "@/assets/json/process.json";

import ArrowRight from "@/assets/svg/ArrowRight.svg";

function Contact() {
  return (
    <div css={contact}>
      <div css={contactHeader}>
        <h2>
          Get{" "}
          <span>
            Started <span>!</span>
          </span>
        </h2>
        <div>
          <p css={display.not(breakPoint.M)}>
            새로운 프로젝트를 준비하거나 함께 일할 개발자를 찾고 계신가요?
            <br />
            이력서를 살펴보시고 프로젝트에 대해 알려주세요!
          </p>
          <p css={display.match(breakPoint.M)}>
            함께 일할 개발자를 찾고 계신가요?
            <br />
            이력서를 살펴보시고 프로젝트에 대해 알려주세요!
          </p>
        </div>
      </div>
      <div>
        <Button css={contactBodyButton} type="primary">
          <span>문의하기</span>
          <ArrowRight />
        </Button>
      </div>
      <div css={contactBodyIllustration}>
        <Lottie
          loop
          play
          css={contactBodyAnimation}
          animationData={Process}
        ></Lottie>
      </div>
    </div>
  );
}

const contact = css``;

const contactHeader = css`
  margin-bottom: 40px;

  h2 {
    font-family: ${fontFamilyWithPaybooc};
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: ${color.brand};

    .exc {
      font-family: ${fontFamilyWithPaybooc};
      font-weight: 900;
      font-weight: 700;
      display: inline-block;
      margin: 0px 6px 0px 1px;
      transform: rotate(4deg);
    }
  }

  ${media.M(css`
    margin-bottom: 28px;
  `)}
`;

const contactBodyButton = css`
  width: 160px;
  border-radius: 10px;
  justify-content: space-between;
  font-size: 14px;
  padding: 14px 20px;
  position: relative;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 2px rgb(0 0 0 / 5%),
    0 4px 4px rgb(0 0 0 / 5%), 0 8px 8px rgb(0 0 0 / 5%);

  & + .button {
    margin-left: 12px;
  }

  svg {
    width: 12px;
    fill: #ffffff;
  }
`;

const contactBodyIllustration = css`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);

  ${media.MD(css`
    top: 60%;
    right: 32px;
  `)}

  ${media.M(css`
    display: none;
  `)}
`;

const contactBodyAnimation = css`
  width: 580px;

  ${media.MD(css`
    width: 480px;
  `)}
`;

export default Contact;
