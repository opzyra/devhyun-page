import AboutperiodThumbnail from "./aboutperiod/image-thumbnail.png";
import AboutperiodMockup from "./aboutperiod/image-mockup.png";
import AboutperiodLayout from "./aboutperiod/image-layout.png";
import AboutperiodDeskTop1 from "./aboutperiod/image-desktop1.png";
import AboutperiodDeskTop2 from "./aboutperiod/image-desktop2.png";
import AboutperiodDeskTop3 from "./aboutperiod/image-desktop3.png";
import AboutperiodMobile1 from "./aboutperiod/image-mobile1.png";
import AboutperiodMobile2 from "./aboutperiod/image-mobile2.png";
import AboutperiodMobile3 from "./aboutperiod/image-mobile3.png";

import LifecaptionThumbnail from "./lifecaption/image-thumbnail.png";
import LifecaptionMockup from "./lifecaption/image-mockup.png";
import LifecaptionLayout from "./lifecaption/image-layout.png";
import LifecaptionDeskTop1 from "./lifecaption/image-desktop1.png";
import LifecaptionDeskTop2 from "./lifecaption/image-desktop2.png";
import LifecaptionDeskTop3 from "./lifecaption/image-desktop3.png";
import LifecaptionDeskTop4 from "./lifecaption/image-desktop4.png";
import LifecaptionMobile1 from "./lifecaption/image-mobile1.png";
import LifecaptionMobile2 from "./lifecaption/image-mobile2.png";
import LifecaptionMobile3 from "./lifecaption/image-mobile3.png";

import SemasThumbnail from "./semas/image-thumbnail.png";

import AbiteofvalueThumbnail from "./abiteofvalue/image-thumbnail.png";

import LegendsOfTerraThumbnail from "./legendsofterra/image-thumbnail.png";

const projects = [
  {
    namekey: "aboutperiod",
    client: "(주)어바웃피리어드",
    title: "어바웃 피리어드 홈페이지",
    name: "ABOUTPERIOD",
    summary: "Brand Website dev.",
    parts: "Desgin, Publish,F/B-end",
    exhibition: true,

    period: "2019.03",
    types: ["web", "responsive"],
    hyperLink: "http://aboutperiod.com",

    overview: [
      `어바웃피리어드는 월경 기간 혹은 한달 주기의 호르몬 변화로 인해
      겪는 많은 고통과 불편함에 공감하며 사람들이 무엇을 필요로하고
      사람들에게 어떤 도움이 필요한 지를 조사하고 연구하여 월경에
      초점을 맞춘 제품과 서비스를 제공하는 스타트업 입니다.`,
      `
      판매 제품의 홍보 및 마케팅을 위한 정보 제공과 기업이 추구하는
      가치를 표현하는 어바웃피리어드
      <br />
      브랜딩 홈페이지를 구축하고 런칭하였습니다.
      `,
    ],

    thumbnail: AboutperiodThumbnail,
    mockup: AboutperiodMockup,
    layout: AboutperiodLayout,
    screen: {
      desktop: [AboutperiodDeskTop1, AboutperiodDeskTop2, AboutperiodDeskTop3],
      mobile: [AboutperiodMobile1, AboutperiodMobile2, AboutperiodMobile3],
    },
  },

  {
    namekey: "lifecaption",
    client: "(주)청각장애인생활지원센터",
    title: "라이프캡션",
    name: "LIFECAPTION",
    summary: "Platform dev.",
    parts: "UI/UX, Publish, F/B-end",
    exhibition: true,

    period: "2021.03",
    types: ["web", "responsive"],
    hyperLink: "http://lifecaption.kr",

    overview: [
      `라이프캡션은 청각장애인의 학습권과 의사소통 권리 보장을 위해 소리를 문자로 통역하는 실시간 문자통역 서비스 입니다.`,
    ],

    thumbnail: LifecaptionThumbnail,
    mockup: LifecaptionMockup,
    layout: LifecaptionLayout,
    screen: {
      desktop: [
        LifecaptionDeskTop1,
        LifecaptionDeskTop2,
        LifecaptionDeskTop3,
        LifecaptionDeskTop4,
      ],
      mobile: [LifecaptionMobile1, LifecaptionMobile2, LifecaptionMobile3],
    },
  },

  {
    namekey: "semas",
    client: "소상공인진흥공단",
    title: "소상공인 새희망자금",
    name: "SEMAS",
    summary: "Public Project.",
    parts: "Publish",
    exhibition: true,

    overview: [
      "코로나19 확산으로 어려움을 겪고 있는 소상공인의 경영 안정을 위하여 중소벤처기업진흥공단과 소상공인진흥공단이 주관하는 새희망자금을 신청 및 접수하는 웹 사이트 입니다.",
    ],
    period: "2020.10",
    types: ["web", "responsive"],
    hyperLink: "https://newhope.sbiz.or.kr/searchcomplaint.do",

    thumbnail: SemasThumbnail,
  },
  // {
  //   namekey: "hcnanum",
  //   title: "홍천군종합사회복지관 홈페이지",
  //   client: "홍천군종합사회복지관",
  //   name: "WELFARE CENTER SYSTEM",
  //   summary: "Solution introduction.",
  //   parts: "Design, Publish, F/B-end",
  //   exhibition: true,

  //   overview: [
  //     "복지관 업무에 특화된 콘텐츠 연동 맞춤형 시스템을 도입하여 실시간으로 콘텐츠를 업로드해 복지관 이용자와 소통하는 홈페이지로 개편하였습니다.",
  //   ],
  //   period: "2020.06",
  //   types: ["web", "responsive"],
  //   hyperLink: "http://hcnanum.or.kr",
  // },
  {
    namekey: "abiteofvalue",
    title: "가치한입 브랜딩 홈페이지",
    client: "가치플러스 사회적협동조합",
    name: "ABITE OF VALUE",
    summary: "Brand Website dev.",
    parts: "Publish, F/B-end",
    exhibition: true,

    overview: [
      "정성 담은 음식을 통해 새로운 가치를 발견하고 세상에 확산하여  공감하며 함께 살아가며, 모든 소비자들의 구매 활동이 가치소비가 되는 사회를 꿈꾸는 가치한입의 브랜딩 홈페이지 입니다.",
    ],
    period: "2020.04",
    types: ["web", "responsive"],
    hyperLink: "http://abiteofvalue.com",

    thumbnail: AbiteofvalueThumbnail,
  },

  {
    namekey: "playlot",
    title: "레전드 오브 테라",
    client: "Team. LOT",
    name: "LEGENDS OF TERRA",
    summary: "NFT Trading Card Game dev.",
    parts: "Publish, Front-end",
    exhibition: true,

    overview: [
      "테라 블록체인 기반의 NFT로 발행된 카드를 이용해 토너먼트에서 승리하여 토큰 보상을 받는 P2E NFT 카드게임으로 카드팩 오픈 등, 초기 프로토타입 프론트엔드 개발을 진행하였습니다.",
    ],
    period: "2021.11",
    types: ["web", "responsive"],
    hyperLink: "https://playlot.io",

    thumbnail: LegendsOfTerraThumbnail,
  },
];

export default projects;
