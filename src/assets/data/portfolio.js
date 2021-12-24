import ImageAboutperiod from "@/assets/images/image-aboutperiod.png";
import CoverAboutperiod from "@/assets/images/cover-aboutperiod.png";
import MockAboutperiod from "@/assets/images/mock-aboutperiod.png";
import PageAboutperiod from "@/assets/images/page-aboutperiod.png";
import FullAboutperiod from "@/assets/images/full-aboutperiod.png";

import ImageLifecaption from "@/assets/images/image-lifecaption.png";
import CoverLifecaption from "@/assets/images/cover-lifecaption.png";
import MockLifecaption from "@/assets/images/mock-lifecaption.png";
import PageLifecaption from "@/assets/images/page-lifecaption.png";
import FullLifecaption from "@/assets/images/full-lifecaption.png";

import ImageAbiteofvalue from "@/assets/images/image-abiteofvalue.png";
import ImageJabis from "@/assets/images/image-jabis.png";

import ImageSemas from "@/assets/images/image-semas.png";
import ImageHcnanum from "@/assets/images/image-hcnanum.png";

const portfolio = [
  {
    id: "aboutperiod",
    image: ImageAboutperiod,
    client: "(주)어바웃피리어드",
    name: "ABOUTPERIOD",
    category: "Brand Website dev.",
    parts: ["Desgin", "Publish", "F/B-end"],
    display: true,

    title: "어바웃 피리어드 홈페이지",
    period: "2019.03",
    type: ["web", "responsive"],
    link: "http://aboutperiod.com",
    cover: CoverAboutperiod,
    mock: MockAboutperiod,
    page: PageAboutperiod,
    full: FullAboutperiod,
    summary:
      "어바웃피리어드는 월경에 대한 올바르지 않은 인식과 사회적 분위기를 바꾸기 위해 월경상자를 기획한 스타트업으로 기업이 추구하는 가치를 홍보하고 신뢰성을 높이기 위해 홈페이지를 런칭하였습니다. 감성적인 일러스트와 폰트를 사용하였고 추구하는 가치와 제품을 메인에 게시하여 기업의 진정성이 느껴질 수 있도록 제작되었습니다.",
  },
  {
    id: "jabis",
    image: ImageJabis,
    client: "제일학원",
    name: "JABIS",
    category: "Custom Solution dev.",
    parts: ["UI/UX", "Publish", "F/B-end"],
    display: true,
  },
  {
    id: "lifecaption",
    image: ImageLifecaption,
    client: "(주)청각장애인생활지원센터",
    name: "LIFECAPTION",
    category: "Platform dev.",
    parts: ["UI/UX", "Publish", "F/B-end"],
    display: true,

    title: "라이프캡션",
    period: "2021.03",
    type: ["web", "responsive"],
    link: "http://lifecaption.kr",
    cover: CoverLifecaption,
    mock: MockLifecaption,
    page: PageLifecaption,
    full: FullLifecaption,
    summary:
      "라이프캡션은 청각장애인의 학습권과 의사소통 권리 보장을 위해 소리를 문자로 통역하는 실시간 문자통역 서비스로 더 나은 듣기 경험을 통해 더 행복한 삶의 방향을 찾을 수 있도록 맞춤형 생애지원서비스를 제공하는 청각장애인생애지원센터에서 운영하고 있습니다.",
  },

  {
    id: "semas",
    image: ImageSemas,
    client: "소상공인 새희망자금",
    name: "SEMAS",
    category: "Public Project.",
    parts: ["Publish"],
    display: true,
  },
  {
    id: "hcnanum",
    image: ImageHcnanum,
    client: "홍천군종합사회복지관",
    name: "WELFARE CENTER SYSTEM",
    category: "Solution introduction.",
    parts: ["Design", "Publish", "F/B-end"],
    display: true,
  },
  {
    id: "abiteofvalue",
    image: ImageAbiteofvalue,
    client: "가치플러스 사회적협동조합",
    name: "ABITE OF VALUE",
    category: "Brand Website dev.",
    parts: ["Publish", "F/B-end"],
    display: true,
  },
];

export default portfolio;
