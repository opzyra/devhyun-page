import { css } from "@emotion/react";
import Link from "next/link";

import { fontFamilyWithPaybooc, color } from "@/styles";

import Image from "@/components/common/Image";

function ProjectItem({ project, ...props }) {
  return (
    <div css={projectItem} {...props}>
      <Link href={`/project/[id]`} as={`/project/${project.id}`}>
        <a>
          <figure>
            <Image
              src={project.image}
              width={6}
              height={4}
              layout="responsive"
              alt={project.name}
            />
            <figcaption>
              <p>{project.client}</p>
              <h4>{project.name}</h4>
            </figcaption>
          </figure>
          <div css={projectInformation}>
            <div css={projectDetail}>
              <h6>PROJECT</h6>
              <p>{project.category}</p>
            </div>
            <div css={projectDetail}>
              <h6>PARTS</h6>
              <ul>
                {project.parts.map((part, index) => (
                  <li key={index}>{part}</li>
                ))}
              </ul>
            </div>
          </div>
        </a>
      </Link>
    </div>
  );
}

const projectItem = css`
  width: calc(32% - 10px);
  margin-top: 60px;
  opacity: 0;

  figure {
    position: relative;
    margin-bottom: 12px;
    overflow: hidden;

    img {
      transition: 0.7s;
      transform: scale(1);
    }

    figcaption {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0px;
      left: 0px;
      background-color: rgba(0, 0, 0, 0.6);
      color: #ffffff;
      padding: 40px;
      opacity: 0;
      transition: 0.5s;

      p {
        font-size: 14px;
      }

      h4 {
        font-family: ${fontFamilyWithPaybooc};
      }
    }

    .image {
      width: 400px;
      height: 264px;
    }
  }

  &:hover figure {
    figcaption {
      opacity: 1;
    }
    figure img {
      transform: scale(1.1);
    }
  }
`;

const projectInformation = css`
  display: flex;
`;

const projectDetail = css`
  width: 50%;

  h6 {
    font-size: 14px;
    font-weight: 700;
    font-family: ${fontFamilyWithPaybooc};
  }

  p {
    font-size: 13px;
  }

  li {
    position: relative;
    display: inline-block;
    font-size: 13px;

    & + li {
      margin-left: 9px;
    }

    & + li::after {
      content: "";
      position: absolute;
      width: 3px;
      height: 3px;
      top: 50%;
      left: -5px;
      transform: translateY(-50%);
      border-radius: 50%;
      background: ${color.gray};
    }
  }
`;

export default ProjectItem;
