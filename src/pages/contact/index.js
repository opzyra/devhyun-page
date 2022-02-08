import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";

import { css } from "@emotion/react";
import { media } from "@/styles";

import Breadcrumb from "@/components/common/Breadcrumb";
import Container from "@/components/common/Container";
import MainLayout from "@/components/layout/MainLayout";
import ServiceItem from "@/components/contact/ServiceItem";
import ServiceGrid from "@/components/contact/ServiceGrid";
import CheckGrid from "@/components/contact/CheckGrid";
import CheckItem from "@/components/contact/CheckItem";

import ArrowRight from "@/assets/svg/ArrowRight.svg";
import IconWebapp from "@/assets/svg/Webapp.svg";
import IconCustomizing from "@/assets/svg/Customizing.svg";
import IconPublishing from "@/assets/svg/Publishing.svg";
import IconFrontend from "@/assets/svg/Frontend.svg";

import IconStatus from "@/assets/svg/Status.svg";
import IconDocument from "@/assets/svg/Document.svg";
import IconReference from "@/assets/svg/Reference.svg";
import IconContents from "@/assets/svg/Contents.svg";
import IconProcess from "@/assets/svg/Process.svg";
import IconCodeSkill from "@/assets/svg/CodeSkill.svg";
import IconPrototype from "@/assets/svg/Prototype.svg";
import IconDevices from "@/assets/svg/Devices.svg";
import IconAnimation from "@/assets/svg/Animation.svg";
import IconCrossBrowsing from "@/assets/svg/CrossBrowsing.svg";
import Button from "@/components/common/Button";

const services = [
  {
    icon: IconWebapp,
    value: "webapp",
    title: "홈페이지·모바일앱",
    description: "사업소개, 쇼핑몰, 커뮤니티 유형의 웹사이트 또는 모바일앱",
    checks: [
      {
        icon: IconStatus,
        title: "프로젝트 배경",
        description: `일정, 예산, 홈페이지 관리 인력 보유 여부등 전반적인 프로젝트에 대한 상황입니다.
        <br/>현재의 상황에 맞게 최선의 결과물을 만들어 드립니다.`,
      },
      {
        icon: IconDocument,
        title: "기획 문서",
        description: `메뉴 구성<small>(대메뉴-하위매뉴)</small>, 핵심기능<small>(상담, 회원, 결제 등)</small>과 같이 홈페이지 기획과 관련된 자료입니다.
        <br/>정리된 문서가 없다면 컨설팅을 통해 방향을 제안드릴수 있습니다.`,
      },
      {
        icon: IconReference,
        title: "벤치마킹 자료",
        description: `디자인·기능에 대해 유사하거나 지향하는 웹사이트가 있다면 관련 자료를 정리해주세요.
        <br/>전체적인 구상과 기획에 대한 디테일을 잡아드립니다.`,
      },
      {
        icon: IconContents,
        title: "홈페이지 콘텐츠",
        description: `홈페이지에 들어갈 콘텐츠로 메뉴 구성에 따라 변동됩니다.
        <br/>제작 과정에서 필요한 부분을 직접 요청드립니다.`,
      },
    ],
  },
  {
    icon: IconCustomizing,
    value: "customizing",
    title: "플랫폼·시스템",
    description: "비즈니스 플랫폼, 고객관리 시스템 등 요구사항 맞춤형 프로젝트",
    checks: [
      {
        icon: IconDocument,
        title: "기획 문서",
        description: `사업의 구체적인 구상 또는 기획안에 대한 문서입니다.
        <br/>정리된 문서가 없다면 컨설팅을 통해 방향을 제안드릴수 있습니다.`,
      },
      {
        icon: IconProcess,
        title: "비즈니스 프로세스",
        description: `구축하고자 하는 시스템의 전체적인 프로세스 이해를 돕기 위한 자료입니다.
        <br/>프로세스가 적립되지 않았다면 컨설팅을 통해 방향을 제안드릴수 있습니다.`,
      },
      {
        icon: IconReference,
        title: "벤치마킹 자료",
        description: `디자인·기능에 대해 유사하거나 지향하는 웹사이트가 있다면 관련 자료를 정리해주세요.
        <br/>전체적인 구상과 기획에 대한 디테일을 잡아드립니다.`,
      },
      {
        icon: IconCodeSkill,
        title: "개발 기술",
        description: `특정한 개발 기술스택을 사용해야하는 경우 사전에 알려주세요.
        <br/>Springboot, React, NodeJS등 요건에 따라 선택하여 개발합니다.`,
      },
    ],
  },
  {
    icon: IconPublishing,
    value: "publishing",
    title: "퍼블리싱",
    description: "HTML·CSS·JQuery 활용 웹·반응형 퍼블리싱 작업",
    checks: [
      {
        icon: IconCrossBrowsing,
        title: "브라우저 지원",
        description: `최신 브라우저뿐만 아니라 구형 브라우저에서도 동작해야하는 경우 추가 작업이 필요합니다.
        <br/>기본적으로 IE11에서도 잘 작동되도록 ES5 스팩으로 개발합니다.`,
      },
      {
        icon: IconPrototype,
        title: "디자인 시안",
        description: `PSD, XD, Sketch, Zeplin과 같은 툴로 작업된 디자인 산출물이 필요합니다.
        <br/>디자인 산출물이 준비되지 않은 경우 퍼블리싱 작업을 수행할수 없습니다.`,
      },
      {
        icon: IconDevices,
        title: "브레이크 포인트",
        description: `시안에 따라 2-Points<small>(PC, Mobile)</small>, 3-Points<small>(PC, Tablet, Mobile)</small>, n-Points<small>(Customizing)</small>
        <br/>반응형 작업의 범위를 사전에 협의하고 진행합니다.`,
      },
      {
        icon: IconAnimation,
        title: "애니메이션",
        description: `스크롤에 따른 역동적인 페이지 구성이나 인터렉션에 따른 효과를 반영해야하는 경우
        <br/>유사 래퍼런스가 있다면 제공해주시고, 애니메이션에 대한 정보를 전달해주세요.`,
      },
    ],
  },
  {
    icon: IconFrontend,
    value: "frontend",
    title: "프론트엔드",
    description: "React·NextJS·Typescript 활용 개발 및 API 연동 작업",
    checks: [
      {
        icon: IconCodeSkill,
        title: "개발 기술",
        description: `SSR 지원, Typescript 도입 여부, State·Fetch 라이브러리 등
        <br/>프론트엔드 개발에 사용되는 기술을 검토하고 체크합니다.`,
      },
      {
        icon: IconPrototype,
        title: "디자인 시안",
        description: `PSD, XD, Sketch, Zeplin과 같은 툴로 작업된 디자인 산출물이 필요합니다.
        <br/>디자인 산출물이 준비되지 않은 경우 퍼블리싱 작업을 수행할수 없습니다.`,
      },
      {
        icon: IconDevices,
        title: "브레이크 포인트",
        description: `시안에 따라 2-Points<small>(PC, Mobile)</small>, 3-Points<small>(PC, Tablet, Mobile)</small>, n-Points<small>(Customizing)</small>
        <br/>반응형 작업의 범위를 사전에 협의하고 진행합니다.`,
      },
      {
        icon: IconAnimation,
        title: "애니메이션",
        description: `스크롤에 따른 역동적인 페이지 구성이나 인터렉션에 따른 효과를 반영해야하는 경우
        <br/>유사 래퍼런스가 있다면 제공해주시고, 애니메이션에 대한 정보를 전달해주세요.`,
      },
    ],
  },
];

function Contact() {
  const [checks, setChecks] = useState([]);
  const [title, setTitle] = useState();
  const { register, control } = useForm({
    defaultValues: {
      service: "webapp",
    },
  });

  const form = useWatch({
    control,
  });

  const handleClickStart = () => {
    window.ChannelIO && window.ChannelIO("openChat");
  };

  useEffect(() => {
    const selectedService = services.find(
      (item) => item.value === form.service,
    );
    setTitle(selectedService.title);
    setChecks(selectedService.checks);
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
          <div className="checks">
            <CheckGrid>
              {checks.map((check, index) => (
                <CheckItem className="item" check={check} key={index} />
              ))}
            </CheckGrid>
          </div>
        </Container>
      </div>

      <div css={channel}>
        <Container>
          <h4>프로젝트 시작하기</h4>
          <p>
            체크리스트를 확인하셨다면 아래의 상담시작 버튼을 클릭하여 상담을
            시작해주세요.
            <br />
            기본 정보를 입력해주시면 빠른 진행이 가능합니다.
          </p>
          <div className="actions">
            <Button css={startButton} type="brand" onClick={handleClickStart}>
              <span>상담시작</span>
              <ArrowRight />
            </Button>
          </div>
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
    padding: 20px 0px;
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

  .checks {
    margin-top: 28px;
    min-height: 344px;
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

const channel = css`
  padding: 60px 0px;
  border-top: 1px solid #ebebeb;

  h4 {
    margin-bottom: 20px;
  }

  .actions {
    margin-top: 40px;
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

const startButton = css`
  width: 160px;
  border-radius: 10px;
  justify-content: space-between;
  font-size: 14px;
  padding: 14px 20px;
  position: relative;
  box-shadow: 0 1px 1px rgb(0 0 0 / 5%), 0 2px 2px rgb(0 0 0 / 5%),
    0 4px 4px rgb(0 0 0 / 5%), 0 8px 8px rgb(0 0 0 / 5%);

  & + .button {
    margin-left: 12px;
  }

  svg {
    width: 12px;
    fill: #ffffff;
  }
`;

export default Contact;
