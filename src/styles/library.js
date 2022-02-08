import { css } from "@emotion/react";
import { color } from "./global";

import "swiper/css";
import "animate.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-away.css";

export const liabrary = css`
  .tippy-box[data-theme~="brand"] {
    background-color: ${color.brand};
    color: #ffffff;
    font-size: 12px;
  }

  .tippy-box[data-theme~="brand"][data-placement^="top"]
    > .tippy-arrow::before {
    border-top-color: ${color.brand};
  }
  .tippy-box[data-theme~="brand"][data-placement^="bottom"]
    > .tippy-arrow::before {
    border-bottom-color: ${color.brand};
  }
  .tippy-box[data-theme~="brand"][data-placement^="left"]
    > .tippy-arrow::before {
    border-left-color: ${color.brand};
  }
  .tippy-box[data-theme~="brand"][data-placement^="right"]
    > .tippy-arrow::before {
    border-right-color: ${color.brand};
  }
`;
