import ImageAboutperiod from "@/data/project/assets/image-aboutperiod.png";
import CoverAboutperiod from "@/data/project/assets/cover-aboutperiod.png";
import MockAboutperiod from "@/data/project/assets/mock-aboutperiod.png";

import LayoutAboutperiod1 from "@/data/project/assets/layout-aboutperiod_1.png";
import LayoutAboutperiod2 from "@/data/project/assets/layout-aboutperiod_2.png";
import LayoutAboutperiod3 from "@/data/project/assets/layout-aboutperiod_3.png";

import ImageLifecaption from "@/data/project/assets/image-lifecaption.png";
import CoverLifecaption from "@/data/project/assets/cover-lifecaption.png";

import ImageAbiteofvalue from "@/data/project/assets/image-abiteofvalue.png";
import CoverAbiteofvalue from "@/data/project/assets/cover-abiteofvalue.png";

import ImageSemas from "@/data/project/assets/image-semas.png";
import CoverSemas from "@/data/project/assets/cover-semas.png";

import ImageHcnanum from "@/data/project/assets/image-hcnanum.png";
import CoverHcnanum from "@/data/project/assets/cover-hcnanum.png";

import ImageLegendsOfTerra from "@/data/project/assets/image-legendsofterra.png";
import CoverLegendsOfTerra from "@/data/project/assets/cover-legendsofterra.png";

const projects = [
  {
    namekey: "aboutperiod",
    client: "(주)어바웃피리어드",
    title: "어바웃 피리어드 홈페이지",
    name: "ABOUTPERIOD",
    summary: "Brand Website dev.",
    parts: "Desgin, Publish,F/B-end",
    exhibition: true,

    description:
      "어바웃피리어드는 월경에 대한 올바르지 않은 인식과 사회적 분위기를 바꾸기 위해 월경상자를 기획한 스타트업으로 기업이 추구하는 가치를 홍보하고 신뢰성을 높이기 위해 홈페이지를 런칭하였습니다.",
    period: "2019.03",
    types: ["web", "responsive"],
    hyperLink: "http://aboutperiod.com",

    thumbnail: ImageAboutperiod,
    cover: CoverAboutperiod,

    sections: [
      {
        container: true,
        image: MockAboutperiod,
      },
      {
        container: true,
        text: {
          title: "LAYOUT",
          description: `기업의 가치를 담은 상품을 메인 페이지에 배치하였으며
          감성적인 일러스트와 폰트, 슬로건을 통해 기업이 추구하는 가치를 전달하였습니다.`,
        },
        images: [LayoutAboutperiod1, LayoutAboutperiod2, LayoutAboutperiod3],
      },
    ],
  },

  {
    namekey: "lifecaption",
    client: "(주)청각장애인생활지원센터",
    title: "라이프캡션",
    name: "LIFECAPTION",
    summary: "Platform dev.",
    parts: "UI/UX, Publish, F/B-end",
    exhibition: true,

    description:
      "라이프캡션은 청각장애인의 학습권과 의사소통 권리 보장을 위해 소리를 문자로 통역하는 실시간 문자통역 서비스로 청각장애인생애지원센터에서 운영하고 있습니다.",
    period: "2021.03",
    types: ["web", "responsive"],
    hyperLink: "http://lifecaption.kr",

    thumbnail: ImageLifecaption,
    cover: CoverLifecaption,
  },

  {
    namekey: "semas",
    client: "소상공인진흥공단",
    title: "소상공인 새희망자금",
    name: "SEMAS",
    summary: "Public Project.",
    parts: "Publish",
    exhibition: true,

    description:
      "코로나19 확산으로 어려움을 겪고 있는 소상공인의 경영 안정을 위하여 중소벤처기업진흥공단과 소상공인진흥공단이 주관하는 새희망자금을 신청 및 접수하는 웹 사이트 입니다.",
    period: "2020.10",
    types: ["web", "responsive"],
    hyperLink: "https://newhope.sbiz.or.kr/searchcomplaint.do",

    thumbnail: ImageSemas,
    cover: CoverSemas,
  },
  {
    namekey: "hcnanum",
    title: "홍천군종합사회복지관 홈페이지",
    client: "홍천군종합사회복지관",
    name: "WELFARE CENTER SYSTEM",
    summary: "Solution introduction.",
    parts: "Design, Publish, F/B-end",
    exhibition: true,

    description:
      "복지관 업무에 특화된 콘텐츠 연동 맞춤형 시스템을 도입하여 실시간으로 콘텐츠를 업로드해 복지관 이용자와 소통하는 홈페이지로 개편하였습니다.",
    period: "2020.06",
    types: ["web", "responsive"],
    hyperLink: "http://hcnanum.or.kr",

    thumbnail: ImageHcnanum,
    cover: CoverHcnanum,
  },
  {
    namekey: "abiteofvalue",
    title: "가치한입 브랜딩 홈페이지",
    client: "가치플러스 사회적협동조합",
    name: "ABITE OF VALUE",
    summary: "Brand Website dev.",
    parts: "Publish, F/B-end",
    exhibition: true,

    description:
      "정성 담은 음식을 통해 새로운 가치를 발견하고 세상에 확산하여  공감하며 함께 살아가며, 모든 소비자들의 구매 활동이 가치소비가 되는 사회를 꿈꾸는 가치한입의 브랜딩 홈페이지 입니다.",
    period: "2020.04",
    types: ["web", "responsive"],
    hyperLink: "http://abiteofvalue.com",

    thumbnail: ImageAbiteofvalue,
    cover: CoverAbiteofvalue,
  },

  {
    namekey: "playlot",
    title: "레전드 오브 테라",
    client: "Team. LOT",
    name: "LEGENDS OF TERRA",
    summary: "NFT Trading Card Game dev.",
    parts: "Publish, Front-end",
    exhibition: true,

    description:
      "테라 블록체인 기반의 NFT로 발행된 카드를 이용해 토너먼트에서 승리하여 토큰 보상을 받는 P2E NFT 카드게임으로 카드팩 오픈 등, 초기 프로토타입 프론트엔드 개발을 진행하였습니다.",
    period: "2021.11",
    types: ["web", "responsive"],
    hyperLink: "https://playlot.io",

    thumbnail: ImageLegendsOfTerra,
    cover: CoverLegendsOfTerra,
  },
];

export default projects;
