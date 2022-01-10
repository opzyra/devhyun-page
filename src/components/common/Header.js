import { useState } from "react";
import { css, keyframes } from "@emotion/react";
import { color, fontFamilyWithPaybooc, media, zIndex } from "@/styles";

import Link from "next/link";
import { useRouter } from "next/router";

import Container from "@/components/common/Container";
import Button from "@/components/common/Button";

import DHLogo from "@/assets/svg/DHLogo.svg";
import Arrow from "@/assets/svg/Arrow.svg";
import NavLink from "./NavLink";

function Header({ background, full }) {
  const [collpased, setCollpased] = useState(false);

  const handleCollpased = () => {
    setCollpased(!collpased);
  };

  return (
    <header css={header({ background, full })}>
      <Container css={headerContainer}>
        <div css={brand}>
          <Link href="/">
            <a>
              <DHLogo />
            </a>
          </Link>
        </div>
        <nav css={nav({ collpased })}>
          <ul css={gnb}>
            <li>
              <NavLink href="/about">
                <a>ABOUT</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/project">
                <a>PROJECT</a>
              </NavLink>
            </li>
            <li>
              <NavLink href="/blog">
                <a>BLOG</a>
              </NavLink>
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
          <div css={startProjectButton}>
            <Button type="brand" shape="round">
              <span>START PROJECT</span>
              <Arrow />
            </Button>
          </div>
        </nav>
        <div css={bugger({ collpased })} onClick={handleCollpased}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </Container>
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
      right: ${full ? "0px" : "3%"};
      z-index: -1;
    }

    ${media.MD(css`
      &:before {
        right: 0px;
      }
    `)}
  `}

  ${media.MD(css`
    height: 60px;
  `)}
`;

const headerContainer = css`
  display: flex;
  align-items: center;
`;

const brand = css`
  z-index: ${zIndex.LEVEL_5};

  a {
    display: block;
  }

  svg {
    width: 180px;
  }

  ${media.M(css`
    svg {
      width: 160px;
    }
  `)}
`;

const nav = ({ collpased }) => css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 40px;
  width: 100%;

  .active {
    color: ${color.primary};
  }

  ${media.MD(css`
    display: block;
    position: absolute;
    top: 0px;
    right: -100%;
    width: 100%;
    background: #ffffff;
    margin-left: 0px;
    transition: opacity 0.4s ease;
    padding: 68px 36px 40px;
    z-index: ${zIndex.LEVEL_4};
    opacity: 0;
    box-shadow: 0 3px 6px 0 rgb(0 0 0 / 4%), inset 0 -1px 1px 0 rgb(0 0 0 / 4%);

    ${collpased &&
    css`
      opacity: 1;
      right: 0;
    `}
  `)}
`;

const gnb = css`
  li {
    display: inline-block;
    a {
      display: block;
      font-size: 14px;
      padding: 8px 16px;
      font-family: ${fontFamilyWithPaybooc};

      &:hover {
        color: ${color.brand};
      }
    }
  }

  ${media.MD(css`
    padding: 0px 0px 16px;

    li {
      display: block;
      text-align: center;

      a {
        padding: 16px 0px;
        font-size: 16px;
      }
    }
  `)}
`;

const startProjectButton = css`
  button {
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
  }

  ${media.MD(css`
    text-align: center;
  `)}
`;

const bugger = ({ collpased }) => css`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  display: none;

  span {
    width: 20px;
    height: 2px;
    display: block;
    background: #fff;
    position: absolute;
    top: 8px;
    left: 6px;
    transition: 0.25s ease-in-out;
    transform-origin: left center;
    background: #1e1e1e;

    &:nth-of-type(2) {
      top: 15px;
    }

    &:nth-of-type(3) {
      top: auto;
      bottom: 8px;
    }

    ${collpased &&
    css`
      &:nth-of-type(1) {
        transform: rotate(45deg);
        left: 8px;
      }

      &:nth-of-type(2) {
        opacity: 0;
        width: 0;
      }

      &:nth-of-type(3) {
        transform: rotate(-45deg);
        left: 8px;
      }
    `}
  }

  ${media.MD(css`
    display: block;
  `)}

  ${media.M(css`
    right: 16px;
  `)}
`;

export default Header;
