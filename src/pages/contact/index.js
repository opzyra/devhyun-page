import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { css } from "@emotion/react";
import { media } from "@/styles";

import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import MainLayout from "@/components/layout/MainLayout";
import ServiceItem from "@/components/contact/ServiceItem";
import ServiceGrid from "@/components/contact/ServiceGrid";

import IconWebapp from "@/assets/svg/Webapp.svg";
import IconCustomizing from "@/assets/svg/Customizing.svg";
import IconPublishing from "@/assets/svg/Publishing.svg";
import IconFrontend from "@/assets/svg/Frontend.svg";

const services = [
  {
    icon: IconWebapp,
    value: "webapp",
    title: "홈페이지·모바일앱",
    description: "사업소개, 쇼핑몰, 커뮤니티 유형의 웹사이트 또는 모바일앱",
  },
  {
    icon: IconCustomizing,
    value: "customizing",
    title: "플랫폼·시스템",
    description: "비즈니스 플랫폼, 고객관리 시스템 등 요구사항 맞춤형 프로젝트",
  },
  {
    icon: IconPublishing,
    value: "publishing",
    title: "퍼블리싱",
    description: "HTML·CSS·JQuery 활용 웹·반응형 퍼블리싱 작업",
  },
  {
    icon: IconFrontend,
    value: "frontend",
    title: "프론트엔드",
    description: "React·NextJS·Typescript 활용 개발 및 API 연동 작업",
  },
];

function Contact() {
  const [title, setTitle] = useState();
  const { register, control } = useForm({
    defaultValues: {
      service: "webapp",
    },
  });

  const form = useWatch({
    control,
  });

  useEffect(() => {
    const selectedTitle = services.find(
      (item) => item.value === form.service,
    ).title;
    setTitle(selectedTitle);
  }, [form]);

  return (
    <MainLayout css={contact}>
      <div css={header}>
        <Container>
          <Breadcrumb items={["문의하기"]} />
          <h3>
            프로젝트를 함께할 개발자를 찾고 계신가요?
            <br />
            내용을 살펴보고 문의해주세요
          </h3>
        </Container>
      </div>
      <div css={service}>
        <Container>
          <h4>서비스 유형</h4>
          <p>
            진행하시는 프로젝트 유형에 맞게 아래의 서비스 유형을 선택해주세요.
            <br />
            선택하신 서비스에 따라 체크리스트가 변동 됩니다.
          </p>
          <div className="services">
            <ServiceGrid>
              {services.map((service, index) => (
                <ServiceItem
                  className="item"
                  register={register}
                  service={service}
                  key={index}
                />
              ))}
            </ServiceGrid>
          </div>
        </Container>
      </div>
      <div css={checkList}>
        <Container>
          <h4>체크리스트</h4>
          <p>
            문의하시기 전에 아래의 내용을 확인해주시면 원할하고 빠른 작업 시작이
            가능합니다.
            <br />
            &quot;{title}&quot; 작업에 대한 체크리스트를 검토해주세요.
          </p>
        </Container>
      </div>
    </MainLayout>
  );
}

const contact = css`
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

const service = css`
  padding: 20px 0px 40px;

  h4 {
    margin-bottom: 20px;
  }

  .services {
    margin-top: 20px;
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

const checkList = css`
  padding: 20px 0px 60px;

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

export default Contact;
