import { css, keyframes } from "@emotion/react";
import { color, size, fontFamilyWithPaybooc } from "@/styles";

import Link from "next/link";

import Button from "./Button";

import DHLogo from "@/assets/svg/DHLogo.svg";
import Arrow from "@/assets/svg/Arrow.svg";

function Header({ background, full }) {
  return (
    <header css={header({ background, full })}>
      <div css={container}>
        <div css={brand}>
          <Link href="/">
            <a>
              <DHLogo />
            </a>
          </Link>
        </div>
        <nav css={nav}>
          <ul css={gnb}>
            <li>
              <Link href="/about">ABOUT</Link>
            </li>
            <li>
              <Link href="/project">PROJECT</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <a
                href="https://github.com/opzyra"
                target="_blank"
                rel="noreferrer"
              >
                GITHUB
              </a>
            </li>
          </ul>
          <div>
            <Button css={button} type="brand" shape="round">
              <span>START PROJECT</span>
              <Arrow />
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

const buttonKeyframe = keyframes`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(3px);
  }
`;

const header = ({ background, full }) => css`
  height: 96px;
  position: relative;

  ${background &&
  css`
    &:before {
      content: "";
      position: absolute;
      background: #fafaff;
      width: 100%;
      height: 100%;
      right: ${full ? "0px" : "60px"};
      z-index: -1;
    }
  `}
`;

const container = css`
  padding: 32px 0 20px;
  display: flex;
  align-items: center;

  width: ${size.container};
  margin: 0 auto;
  height: 100%;
`;

const brand = css`
  a {
    display: block;
  }

  svg {
    width: 180px;
  }
`;

const nav = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 40px;
  width: 100%;
`;

const gnb = css`
  li {
    display: inline-block;
    a {
      display: block;
      font-size: 14px;
      padding: 8px 20px;
      font-family: ${fontFamilyWithPaybooc};

      &:hover {
        color: ${color.brand};
      }
    }
  }
`;

const button = css`
  &:hover {
    border: 1px solid ${color.brand};
    background-color: transparent;
    color: ${color.brand};
  }

  svg {
    stroke: #ffffff;
    stroke-width: 2;
    margin-left: 8px;
  }

  &:hover svg {
    stroke: ${color.brand};
    animation: ${buttonKeyframe} 0.5s ease-in forwards;
  }
`;

export default Header;
