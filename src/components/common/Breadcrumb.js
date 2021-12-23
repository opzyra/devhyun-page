import PropTypes from "prop-types";
import { css } from "@emotion/react";
import { color } from "@/styles";

import BreadcrumbArrow from "@/assets/svg/BreadcrumbArrow.svg";

Breadcrumb.propTypes = {
  items: PropTypes.array.isRequired,
};

function Breadcrumb({ items }) {
  return (
    <div css={breadcrumb}>
      <ul>
        <li>데브현 메인</li>
        {items &&
          items.map((item, index) => (
            <li key={index}>
              <BreadcrumbArrow />
              {item}
            </li>
          ))}
      </ul>
    </div>
  );
}

const breadcrumb = css`
  margin-bottom: 20px;

  li {
    display: inline-block;
    font-size: 12px;
    position: relative;
  }

  li svg {
    width: 5px;
    height: 5px;
    fill: #8a8a8a;
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
  }

  li + li {
    margin-left: 16px;
  }

  li:last-of-type {
    color: ${color.brand};
  }
`;

export default Breadcrumb;
