import { useRouter } from "next/router";
import { useCallback } from "react";
import { css } from "@emotion/react";

import PropTypes from "prop-types";
import { lighten } from "polished";

import { color } from "@/styles";

Button.propTypes = {
  block: PropTypes.bool,
  type: PropTypes.oneOf(["default", "brand", "primary", "danger", "success"]),
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(["small", "middle", "large"]),
  shape: PropTypes.oneOf(["circle", "round"]),
  href: PropTypes.string,
  link: PropTypes.string,
  target: PropTypes.bool,
};

function Button({
  block = false,
  type = "default",
  disabled = false,
  size = "middle",
  shape,
  href,
  link,
  target,
  children,
  onClick,
  ...props
}) {
  const router = useRouter();

  const handleClick = useCallback(() => {
    if (href) {
      const opener = target ? window.open("about:blank") : window;
      opener.location.href = href;
      return;
    }

    if (link) {
      router.push(link);
      return;
    }

    onClick && onClick();
  }, [href, target, onClick]);

  return (
    <button
      css={button({ block, type, size, shape })}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

const button = ({ block, type, size, shape }) => css`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  user-select: none;
  touch-action: manipulation;
  padding: 10px 20px;
  font-size: 12px;
  border-radius: 2px;
  border-color: #d9d9d9;
  background: #fff;
  border: 1px solid ${color.gray};

  ${block &&
  css`
    display: inline-block;
  `}

  ${size === "large" &&
  css`
    font-size: 14px;
    padding: 12px 24px;
  `}

  ${type !== "default" &&
  css`
    color: #fff;
    border-color: ${color[type]};
    background: ${color[type]};
    text-shadow: 0 -1px 0 rgb(0 0 0 / 12%);
    box-shadow: 0 2px #0000000b;

    &:hover {
      border-color: ${lighten("0.05", color[type])};
      background: ${lighten("0.05", color[type])};
    }
  `}

  ${shape === "round" &&
  css`
    border-radius: 100px;
  `}

  ${shape === "circle" &&
  css`
    border-radius: 50%;
  `}

  &:focus, &:active {
    outline: 0;
  }
`;

export default Button;
