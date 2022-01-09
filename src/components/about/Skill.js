import { useEffect, useRef } from "react";
import { css } from "@emotion/react";

import { color, breakPoint, media } from "@/styles";
import * as string from "@/library/string";

import Image from "@/components/common/Image";

import IconFrontend from "@/assets/images/icon-frontend.png";
import IconBackend from "@/assets/images/icon-backend.png";
import IconDevops from "@/assets/images/icon-devops.png";

import skills from "@/assets/data/skill";

function Skill() {
  const skillRef = useRef(null);

  const handleNavMouseEnter = ({ event, type }) => {
    const skillInst = skillRef.current;
    skillInst.querySelectorAll("li").forEach((li) => {
      li.style.opacity = "0.3";
    });

    skillInst.querySelectorAll(`.${type}`).forEach((li) => {
      li.style.opacity = "1";
    });
  };

  const handleNavMouseLeave = (event) => {
    const skillInst = skillRef.current;
    skillInst.querySelectorAll(`li`).forEach((li) => {
      li.style.opacity = "1";
    });
  };

  const handleNavClick = ({ event, type }) => {
    const skillInst = skillRef.current;
    const firstDom = skillInst.querySelectorAll(`.${type}`)[0];

    window.scroll({
      behavior: "smooth",
      top: firstDom.offsetParent.offsetTop - 120,
    });
  };

  return (
    <div css={skill}>
      <div css={nav}>
        <ul>
          <li
            onMouseEnter={(event) =>
              handleNavMouseEnter({ event, type: "frontend" })
            }
            onMouseLeave={handleNavMouseLeave}
            onClick={(event) => handleNavClick({ event, type: "frontend" })}
          >
            <Image src={IconFrontend} alt="frontend" center />
            <p>Frontend</p>
          </li>
          <li
            onMouseEnter={(event) =>
              handleNavMouseEnter({ event, type: "backend" })
            }
            onMouseLeave={handleNavMouseLeave}
            onClick={(event) => handleNavClick({ event, type: "backend" })}
          >
            <Image src={IconBackend} alt="backend" center />
            <p>Backend</p>
          </li>
          <li
            onMouseEnter={(event) =>
              handleNavMouseEnter({ event, type: "devops" })
            }
            onMouseLeave={handleNavMouseLeave}
            onClick={(event) => handleNavClick({ event, type: "devops" })}
          >
            <Image src={IconDevops} alt="devops" center />
            <p>Devops</p>
          </li>
        </ul>
      </div>
      <div css={content}>
        <ul ref={skillRef}>
          {skills.map((skill, index) => (
            <li key={index} className={skill.type} css={skillItem}>
              <Image src={skill.image} alt={skill.name} />
              <div css={skillContents}>
                <h6>
                  {skill.name}
                  <span>{string.capitalization(skill.type)}</span>
                </h6>
                <p>{skill.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const skill = css`
  position: relative;
`;

const nav = css`
  position: absolute;
  top: -64px;
  right: 0px;

  li {
    display: inline-block;
    text-align: center;
    min-width: 56px;
    cursor: pointer;
    padding: 0px 14px;

    &:hover p {
      color: ${color.brand};
    }

    .image {
      width: 36px;
      height: 36px;
    }

    p {
      margin-top: 4px;
      font-size: 14px;
      transition: 0.3s;
    }
  }

  ${media.MD(css`
    display: none;
  `)}
`;

const content = css`
  padding: 36px 0px 0px;
`;

const skillItem = css`
  display: inline-flex;
  align-items: center;
  width: 25%;
  margin: 16px 0px;
  transition: 0.3s;

  .image {
    width: 40px;
    height: 40px;
    margin-right: 8px;
  }

  ${media.XL(
    css`
      .image {
        width: 36px;
        height: 36px;
        margin-right: 8px;
      }
    `,
  )}

  ${media.LG(
    css`
      width: 33.333%;
    `,
  )}

  ${media.MD(css`
    .image {
      width: 28px;
      height: 28px;
      margin-right: 4px;
    }
  `)}
`;

const skillContents = css`
  span {
    margin-left: 8px;
    font-size: 12px;
    color: ${color.primary};
  }

  p {
    font-size: 14px;
  }

  ${media.LG(
    css`
      p {
        font-size: 12px;
      }
    `,
  )}
`;

export default Skill;
