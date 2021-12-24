import { css } from "@emotion/react";
import { color } from "@/styles";

import BreadcrumbArrow from "@/assets/svg/BreadcrumbArrow.svg";

function Breadcrumb({ items }) {
  return (
    <ul css={breadcrumb}>
      <li css={breadcrumbItem}>데브현 메인</li>
      {items &&
        items.map((item, index) => (
          <li css={breadcrumbItem} key={index}>
            <BreadcrumbArrow />
            {item}
          </li>
        ))}
    </ul>
  );
}

const breadcrumb = css`
  margin-bottom: 20px;
`;

const breadcrumbItem = css`
  display: inline-block;
  font-size: 12px;
  position: relative;

  & + & {
    margin-left: 16px;
  }

  &:last-of-type {
    color: ${color.brand};
  }

  svg {
    width: 5px;
    height: 5px;
    fill: #8a8a8a;
    position: absolute;
    top: 50%;
    left: -10px;
    transform: translateY(-50%);
  }
`;

export default Breadcrumb;
