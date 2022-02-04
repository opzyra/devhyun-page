import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { css } from "@emotion/react";
import { media } from "@/styles";

import { preFetchingQuery } from "@/library/query";
import { preFetchServices, useServices } from "@/query/service";

import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import MainLayout from "@/components/layout/MainLayout";
import ServiceGrid from "@/components/contact/ServiceGrid";

function Contact() {
  const { services } = useServices();
  const [title, setTitle] = useState();
  const { register, control } = useForm({
    defaultValues: {
      service: services[0].value,
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
            <ServiceGrid services={services} register={register} />
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

export async function getServerSideProps() {
  const props = await preFetchingQuery([preFetchServices()]);
  return props;
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
