import { css } from "@emotion/react";
import { breakPoint, display, media } from "@/styles";

import Image from "@/components/common/Image";

import MainLayout from "@/components/layout/MainLayout";
import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import Skill from "@/components/about/Skill";

import IconFlow from "@/assets/images/icon-flow.png";
import IconLanguage from "@/assets/images/icon-language.png";
import IconRoot from "@/assets/images/icon-root.png";
import IconTrust from "@/assets/images/icon-trust.png";
import IconWeb from "@/assets/images/icon-web.png";

import ImgIdentity from "@/assets/images/img-identity.png";
import ImgIdentityM from "@/assets/images/img-identity_m.png";

function About() {
  return (
    <MainLayout css={about}>
      <div css={header}>
        <Container>
          <Breadcrumb items={["소개"]} />
          <h3>
            웹 브라우저로 사람을 연결하는 개발자
            <br />
            김현호에 대해 알아보세요 !
          </h3>
        </Container>
      </div>
      <div css={keyword}>
        <Container>
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
        </Container>
      </div>
      <div css={introduce}>
        <Container>
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
        </Container>
      </div>
      <div css={skills}>
        <Container>
          <h4>기술스택 소개</h4>
          <p>프로젝트를 수행하기 위해 사용해본 경험이 있는 기술스택입니다.</p>
          <p>
            언급된 기술은 결과물을 도출해본 경험이 있으며 개발된 소스코드를
            이해할 수 있습니다.
          </p>
          <Skill />
        </Container>
      </div>
      <div css={value}>
        <Container>
          <h4>데브현 소개</h4>
          <p>
            세상에 많은 개발자들 중 &#39;김현호&#39;가 추구하는 가치를 브랜드화
            하였습니다.
          </p>
          <div>
            <Image
              css={display.not(breakPoint.M, "block")}
              src={ImgIdentity}
              alt="identity"
            />
            <Image
              css={display.match(breakPoint.M, "block")}
              src={ImgIdentityM}
              alt="identity"
            />
          </div>
        </Container>
      </div>
    </MainLayout>
  );
}

const about = css`
  padding: 20px 0px;

  ${media.M(css`
    padding: 12px 0px;
  `)}
`;

const header = css`
  padding-bottom: 20px;

  ${media.M(css`
    padding-bottom: 12px;
  `)}
`;

const keyword = css`
  padding: 28px 0px;

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

  ${media.LG(
    css`
      li {
        margin: 0 0 0 36px;
      }
    `,
  )}

  ${media.MD(
    css`
      padding: 20px 0px;

      li {
        width: 120px;
        height: 120px;
        padding: 12px;
        margin: 0 0 0 16px;

        .image {
          width: 48px;
          height: 48px;
        }
      }
    `,
  )}
  ${media.M(css`
    ul {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      margin: -8px;
    }

    li {
      display: inline-flex;
      justify-content: center;
      align-items: center;
      width: 80px;
      height: 80px;
      margin: 8px;

      &:first-of-type {
        margin: 8px;
      }

      p {
        display: none;
      }
    }
  `)}
`;

const introduce = css`
  padding: 40px 0px 60px;
  border-bottom: 1px solid #ebebeb;

  h4 {
    margin-bottom: 20px;
  }

  ${media.MD(css`
    padding: 20px 0px 40px;
  `)}

  ${media.M(css`
    h4 {
      margin-bottom: 8px;
    }
  `)}
`;

const skills = css`
  padding: 60px 0px;
  border-bottom: 1px solid #ebebeb;

  h4 {
    margin-bottom: 20px;
  }

  ${media.MD(css`
    padding: 40px 0px;
  `)}

  ${media.M(css`
    h4 {
      margin-bottom: 8px;
    }
  `)}
`;

const value = css`
  padding: 60px 0px 0px 0px;

  h4 {
    margin-bottom: 20px;
  }

  ${media.MD(css`
    padding: 40px 0px 0px 0px;
  `)}
`;

export default About;
