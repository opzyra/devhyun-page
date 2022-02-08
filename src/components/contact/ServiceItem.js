import { css, keyframes } from "@emotion/react";
import { color, media } from "@/styles";

import IconCheckbox from "@/assets/svg/Checkbox.svg";

function ServiceItem({ service, register, ...props }) {
  const IconService = service.icon;
  return (
    <div css={serviceItem} {...props}>
      <label>
        <input
          className="radio"
          type="radio"
          value={service.value}
          {...register("service")}
        />
        <div className="check">
          <IconCheckbox />
        </div>
        <div className="box">
          <div className="icon">
            <IconService />
          </div>
          <div className="contents">
            <h6>{service.title}</h6>
            <p>{service.description}</p>
          </div>
        </div>
      </label>
    </div>
  );
}

const buttonKeyframe = keyframes`
  50% {
    transform: scale(1.2);
  }
`;

const serviceItem = css`
  label {
    display: inline-block;
    position: relative;
    width: 100%;

    .check {
      position: absolute;
      opacity: 0;
      top: 15px;
      right: 15px;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      border: 1px solid #ebebeb;
      transition: all 0.2s ease;

      svg {
        width: 12px;
        height: 9px;
        position: absolute;
        z-index: 1;
        top: 50%;
        left: 50%;
        fill: none;
        stroke: white;
        stroke-width: 2;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-dasharray: 16px;
        stroke-dashoffset: 16px;
        transition: all 0.3s ease;
        transition-delay: 0.1s;
        transform: translateX(-50%) translateY(-50%) translate3d(0, 0, 0)
          scale(0.7);
      }
    }

    .radio {
      display: none;
    }

    .radio:checked ~ .box {
      border: 1px solid ${color.brand};

      .icon svg {
        fill: ${color.brand};
      }

      .contents h6 {
        color: ${color.brand};
        font-weight: 900;
      }
    }

    .radio:checked ~ .check {
      opacity: 1;
      border-color: ${color.brand};
      background: ${color.brand};
      animation: ${buttonKeyframe} 0.6s ease;

      svg {
        stroke-dashoffset: 0;
      }
    }

    .box {
      position: relative;
      border: 1px solid #ebebeb;
      border-radius: 8px;
      display: flex;
      align-items: center;
      padding: 12px 16px;
      transition: all 0.2s ease-in;
      cursor: pointer;

      .icon {
        flex-shrink: 0;
        margin-right: 16px;

        svg {
          width: 48px;
          fill: #ebebeb;
        }
      }

      .contents {
        flex-grow: 1;

        h6 {
          margin-bottom: 2px;
        }

        p {
          word-break: keep-all;
          font-size: 14px;
        }
      }
    }
  }

  ${media.XL(css`
    label {
      .box {
        min-height: 94px;
      }
    }
  `)}

  ${media.SM(css`
    label {
      .box {
        min-height: auto;
      }
    }
  `)}
`;

export default ServiceItem;
