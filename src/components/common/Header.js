import PropTypes from "prop-types";
import { css, keyframes } from "@emotion/react";
import { color, fontFamilyWithPaybooc } from "@/styles";

import Link from "next/link";

import Container from "@/components/common/Container";
import Button from "./Button";

import DHLogo from "@/assets/svg/DHLogo.svg";
import Arrow from "@/assets/svg/Arrow.svg";

Header.propTypes = {
  background: PropTypes.bool,
};

function Header({ background, full }) {
  return (
    <header css={headerStyle({ background, full })}>
      <Container css={containerStyle}>
        <div css={brandStyle}>
          <Link href="/">
            <a>
              <DHLogo />
            </a>
          </Link>
        </div>
        <nav css={navStyle}>
          <ul className="gnb">
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
          <div className="contact">
            <Button css={contactButtonStyle} type="brand" shape="round">
              <span>START PROJECT</span>
              <Arrow />
            </Button>
          </div>
        </nav>
      </Container>
    </header>
  );
}

const headerStyle = ({ background, full }) => css`
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

const containerStyle = css`
  padding: 32px 0 20px;
  display: flex;
  align-items: center;
`;

const brandStyle = css`
  a {
    display: block;
  }

  svg {
    width: 180px;
  }
`;

const navStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-left: 40px;
  width: 100%;

  .gnb li {
    display: inline-block;
  }

  .gnb li a {
    display: block;
    font-size: 14px;
    padding: 8px 20px;
    font-family: ${fontFamilyWithPaybooc};
  }

  .gnb li a:hover {
    color: ${color.brand};
  }
`;

const contactButtonKeyframe = keyframes`
  from {
    transform: translateX(-2px);
  }
  to {
    transform: translateX(3px);
  }
`;

const contactButtonStyle = css`
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
    animation: ${contactButtonKeyframe} 0.5s ease-in forwards;
  }
`;

export default Header;
