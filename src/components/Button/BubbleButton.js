import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { color } from "@/styles";

BubbleButton.propTypes = {};

function BubbleButton({ children, onClick, ...props }) {
  return (
    <div css={bubbleButtonStyle} {...props}>
      <button onClick={onClick}>
        {children}
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  );
}

const bubbleButtonStyle = css`
  button {
    color: #ffffff;
    font-size: 18px;
    border: 1px solid ${color.brand};
    background: ${color.brand};
    border-radius: 10px;
    text-align: center;
    position: relative;
    overflow: hidden;
    z-index: 1;
    transition: 0.5s;
    width: 240px;
    padding: 20px 0px;
    box-shadow: 0px 3px 10px #0000000d;
  }

  button span {
    position: absolute;
    width: 25%;
    height: 100%;
    background-color: #ffffff;
    transform: translateY(150%);
    border-radius: 50%;
    transition: 0.5s;
    z-index: -1;
  }

  button:hover {
    color: ${color.brand};
  }

  button:hover span {
    transform: translateY(0) scale(2);

    &:nth-of-type(1) {
      transition-delay: 0;
      left: 0;
    }

    &:nth-of-type(2) {
      transition-delay: 0.1s;
      left: 25%;
    }

    &:nth-of-type(3) {
      transition-delay: 0.2s;
      left: 50%;
    }

    &:nth-of-type(4) {
      transition-delay: 0.3s;
      left: 75%;
    }
  }
`;

export default BubbleButton;
