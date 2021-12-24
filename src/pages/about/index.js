import { css } from "@emotion/react";

import { size } from "@/styles";

import Image from "@/components/common/Image";

import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Skill from "@/components/main/Skill";

import IconFlow from "@/assets/images/icon-flow.png";
import IconLanguage from "@/assets/images/icon-language.png";
import IconRoot from "@/assets/images/icon-root.png";
import IconTrust from "@/assets/images/icon-trust.png";
import IconWeb from "@/assets/images/icon-web.png";

import ImgIdentity from "@/assets/images/img-identity.png";

function About() {
  return (
    <MainLayout css={about}>
      <div css={header}>
        <div css={container}>
          <Breadcrumb items={["소개"]} />
          <h3>
            웹 브라우저로 사람을 연결하는 개발자
            <br />
            김현호에 대해 알아보세요 !
          </h3>
        </div>
      </div>
      <div css={keyword}>
        <div css={container}>
          <ul>
            <li>
              <Image src={IconWeb} alt="김현호" center />
              <p>웹개발자</p>
              <p>김현호</p>
            </li>
            <li>
              <Image src={IconLanguage} alt="프론트엔드" center />
              <p>전문분야</p>
              <p>프론트엔드</p>
            </li>
            <li>
              <Image src={IconFlow} alt="문제해결" center />
              <p>유연한</p>
              <p>문제해결</p>
            </li>
            <li>
              <Image src={IconRoot} alt="뿌리깊은" center />
              <p>뿌리깊은</p>
              <p>개발자</p>
            </li>
            <li>
              <Image src={IconTrust} alt="신뢰" center />
              <p>핵심가치</p>
              <p>신뢰</p>
            </li>
          </ul>
        </div>
      </div>
      <div css={introduce}>
        <div css={container}>
          <h4>개발자 소개</h4>
          <p>
            웹 브라우저를 통해 사람을 연결하고 다양한 문제를 해결 및 개선하는
            매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.
          </p>
          <p>
            프론트엔드를 전문적으로 다루고 있으며 유저 편의성을 녹아낸 웹
            프로그램을 개발 하고 있습니다.
          </p>
          <br />
          <p>
            문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에
            적극적으로 도전하며
          </p>
          <p>
            다양한 프로젝트를 통해 얻어진 노하우를 바탕으로 프로젝트를 진행하고
            있습니다.
          </p>
          <br />
          <p>반갑습니다, 신뢰를 가장 중요시하는 개발자 김현호입니다.</p>
        </div>
      </div>
      <div css={skills}>
        <div css={container}>
          <h4>기술스택 소개</h4>
          <p>프로젝트를 수행하기 위해 사용해본 경험이 있는 기술스택입니다.</p>
          <p>
            언급된 기술은 결과물을 도출해본 경험이 있으며 개발된 소스코드를
            이해할 수 있습니다.
          </p>
          <Skill />
        </div>
      </div>
      <div css={value}>
        <div css={container}>
          <h4>데브현 소개</h4>
          <p>
            세상에 많은 개발자들 중 &#39;김현호&#39;가 추구하는 가치를 브랜드화
            하였습니다.
          </p>
          <Image src={ImgIdentity} alt="identity" />
        </div>
      </div>
    </MainLayout>
  );
}

const about = css`
  padding: 20px 0px;
`;

const header = css`
  padding-bottom: 20px;
`;

const container = css`
  width: ${size.container};
  height: 100%;
  margin: 0 auto;
`;

const keyword = css`
  padding: 40px 0px;

  li {
    display: inline-block;
    text-align: center;
    background: #f5f5f5;
    padding: 20px;
    width: 148px;
    height: 148px;
    border-radius: 50%;
    box-sizing: border-box;
    margin: 0 0 0 72px;

    .image {
      width: 64px;
      height: 64px;
    }

    &:first-of-type {
      margin: 0px;
    }
  }

  p {
    font-size: 14px;
    line-height: 1.4;
  }
`;

const introduce = css`
  padding: 40px 0px 60px;
  border-bottom: 1px solid #ebebeb;

  h4 {
    margin-bottom: 20px;
  }
`;

const skills = css`
  padding: 60px 0px;
  border-bottom: 1px solid #ebebeb;

  h4 {
    margin-bottom: 20px;
  }
`;

const value = css`
  padding: 60px 0px 0px 0px;

  h4 {
    margin-bottom: 20px;
  }
`;

export default About;
