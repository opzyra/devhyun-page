import SkillHtml from "@/data/skill/assets/skill-html.png";
import SkillCss from "@/data/skill/assets/skill-css.png";
import SkillSass from "@/data/skill/assets/skill-sass.png";
import SkillBootstrap from "@/data/skill/assets/skill-bootstrap.png";
import SkillJquery from "@/data/skill/assets/skill-jquery.png";
import SkillJavascript from "@/data/skill/assets/skill-javascript.png";
import SkillTypescript from "@/data/skill/assets/skill-typescript.png";
import SkillWebpack from "@/data/skill/assets/skill-webpack.png";
import SkillReact from "@/data/skill/assets/skill-react.png";
import SkillNextjs from "@/data/skill/assets/skill-nextjs.png";
import SkillAntd from "@/data/skill/assets/skill-antd.png";
import SkillVue from "@/data/skill/assets/skill-vue.png";

import SkillNodejs from "@/data/skill/assets/skill-nodejs.png";
import SkillBabel from "@/data/skill/assets/skill-babel.png";
import SkillNestjs from "@/data/skill/assets/skill-nestjs.png";
import SkillSequelize from "@/data/skill/assets/skill-sequelize.png";
import SkillJava from "@/data/skill/assets/skill-java.png";
import SkillSpring from "@/data/skill/assets/skill-spring.png";
import SkillSpringboot from "@/data/skill/assets/skill-springboot.png";
import SkillEgov from "@/data/skill/assets/skill-egov.png";
import SkillPhp from "@/data/skill/assets/skill-php.png";
import SkillLaravel from "@/data/skill/assets/skill-laravel.png";
import SkillMysql from "@/data/skill/assets/skill-mysql.png";
import SkillMariadb from "@/data/skill/assets/skill-mariadb.png";

import SkillAws from "@/data/skill/assets/skill-aws.png";
import SkillLinux from "@/data/skill/assets/skill-linux.png";
import SkillGit from "@/data/skill/assets/skill-git.png";
import SkillSvn from "@/data/skill/assets/skill-svn.png";
import SkillJira from "@/data/skill/assets/skill-jira.png";
import SkillBitbucket from "@/data/skill/assets/skill-bitbucket.png";
import SkillCircleci from "@/data/skill/assets/skill-circleci.png";
import SkillSentry from "@/data/skill/assets/skill-sentry.png";
import SkillSlack from "@/data/skill/assets/skill-slack.png";
import SkillNotion from "@/data/skill/assets/skill-notion.png";
import SkillGitbook from "@/data/skill/assets/skill-gitbook.png";

const skill = [
  {
    type: "frontend",
    image: SkillHtml,
    name: "HTML",
    description: "태그를 활용한 마크업",
  },
  {
    type: "frontend",
    image: SkillCss,
    name: "CSS",
    description: "PSD·XD 화면 시안 퍼블리싱",
  },
  {
    type: "frontend",
    image: SkillSass,
    name: "Sass",
    description: "Module, Structuring 스타일 작업",
  },
  {
    type: "frontend",
    image: SkillBootstrap,
    name: "Bootstrap",
    description: "템플릿, 관리자 페이지 개발 활용",
  },
  {
    type: "frontend",
    image: SkillJquery,
    name: "Jquery",
    description: "라이브러리 활용 및 커스터마이징",
  },
  {
    type: "frontend",
    image: SkillJavascript,
    name: "Javascript",
    description: "모던 자바스크립트 문법 활용",
  },
  {
    type: "frontend",
    image: SkillTypescript,
    name: "Typescript",
    description: "타입 선언, 문법 개발 활용",
  },
  {
    type: "frontend",
    image: SkillWebpack,
    name: "Webpack",
    description: "개발 환경 설정 및 플러그인 활용",
  },
  {
    type: "frontend",
    image: SkillReact,
    name: "React",
    description: "Hook·Redux·CSS-in-JS 활용",
  },
  {
    type: "frontend",
    image: SkillNextjs,
    name: "Nextjs",
    description: "React SSR·SEO 최적화 개발",
  },
  {
    type: "frontend",
    image: SkillAntd,
    name: "Antd",
    description: "React 기반 관리자 페이지 개발",
  },
  {
    type: "frontend",
    image: SkillVue,
    name: "Vue",
    description: "Directive·Router·Vuex 활용",
  },

  {
    type: "backend",
    image: SkillNodejs,
    name: "Nodejs",
    description: "Express기반의 MVC·REST API 구축",
  },
  {
    type: "backend",
    image: SkillBabel,
    name: "Babel",
    description: "모던 자바스크립트 문법을 활용한 개발",
  },
  {
    type: "backend",
    image: SkillNestjs,
    name: "Nestjs",
    description: "구조화된 REST API 서버 구축",
  },
  {
    type: "backend",
    image: SkillSequelize,
    name: "Sequelize",
    description: "ORM 기반의 데이터 설계·구축",
  },
  {
    type: "backend",
    image: SkillJava,
    name: "Java",
    description: "객체지향에 대한 이해와 람다 활용",
  },
  {
    type: "backend",
    image: SkillSpring,
    name: "Spring",
    description: "프레임워크 활용, 환결설정·MVC 개발",
  },
  {
    type: "backend",
    image: SkillSpringboot,
    name: "Springboot",
    description: "환결설정 및 3th-party library 활용",
  },
  {
    type: "backend",
    image: SkillEgov,
    name: "Egovframework",
    description: "공통 컴포넌트기반의 표준 자바 웹 개발",
  },
  {
    type: "backend",
    image: SkillPhp,
    name: "PHP",
    description: "Legacy 문법 활용·그누보드 개발",
  },
  {
    type: "backend",
    image: SkillLaravel,
    name: "Laravel",
    description: "프레임워크를 활용한 MVC 개발",
  },
  {
    type: "backend",
    image: SkillMysql,
    name: "MySQL",
    description: "JOIN·INDEX에 대한 이해, SQL 작성",
  },
  {
    type: "backend",
    image: SkillMariadb,
    name: "MariaDB",
    description: "JOIN·INDEX에 대한 이해, SQL 작성",
  },

  {
    type: "devops",
    image: SkillAws,
    name: "AWS",
    description: "EC2·Route53·S3 활용한 클라우드 구축",
  },
  {
    type: "devops",
    image: SkillLinux,
    name: "Linux",
    description: "기본 명령어 숙지 및 서버 환경 설정",
  },
  {
    type: "devops",
    image: SkillGit,
    name: "Git",
    description: "기본적인 사용법 숙지 브랜치 활용",
  },
  {
    type: "devops",
    image: SkillSvn,
    name: "SVN",
    description: "SVN 서버 구축, 형상관리 툴 활용",
  },
  {
    type: "devops",
    image: SkillJira,
    name: "Jira",
    description: "애자일 방법론을 위한 프로젝트 관리",
  },
  {
    type: "devops",
    image: SkillBitbucket,
    name: "Bitbucket",
    description: "Jira 통합 소스코드 형상 관리",
  },
  {
    type: "devops",
    image: SkillCircleci,
    name: "CircleCi",
    description: "Jira 통합 CI/CD 자동배포 환경 구축",
  },
  {
    type: "devops",
    image: SkillSentry,
    name: "Sentry",
    description: "Application BackLog 수집·알림",
  },
  {
    type: "devops",
    image: SkillSlack,
    name: "Slack",
    description: "3th-party Notification 환경 구축",
  },
  {
    type: "devops",
    image: SkillNotion,
    name: "Notion",
    description: "협업 위한 다양한 문서 작성",
  },
  {
    type: "devops",
    image: SkillGitbook,
    name: "Gitbook",
    description: "프로그램 사용자 가이드 제작",
  },
];

export default skill;
