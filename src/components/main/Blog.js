import PropTypes from "prop-types";
import { css } from "@emotion/react";

import { useEffect, useRef } from "react";

import anime from "animejs";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Pagination } from "swiper";

import Image from "@/components/common/Image";

import ImageAboutperiod from "/src/assets/images/image-aboutperiod.png";
import { color } from "@/styles";

MainBlog.propTypes = {};

function MainBlog() {
  const blogRef = useRef(null);

  const handleMouseEnter = (event) => {
    const blogInst = blogRef.current;
    anime
      .timeline()
      .add({
        targets: blogInst.querySelectorAll(".item"),
        opacity: 0.6,
        scale: 0.98,
        duration: 0,
      })
      .add({
        targets: event.target.classList.contains(".item")
          ? event.target
          : event.target.closest(".item"),
        opacity: 1,
        scale: 1,
        duration: 0,
      });
  };

  const handleMouseLeave = () => {
    const blogInst = blogRef.current;
    anime({
      targets: blogInst.querySelectorAll(".item"),
      opacity: 1,
      scale: 1,
      duration: 0,
    });
  };

  useEffect(() => {
    const blogInst = blogRef.current;
    blogInst.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      blogInst.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div css={mainBlogStyle}>
      <Swiper
        modules={[Mousewheel, Pagination]}
        observer={true}
        observeParents={true}
        css={blogListStyle}
        spaceBetween={40}
        slidesPerView={"auto"}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        speed={500}
        freeMode={true}
        mousewheel={{
          eventsTarget: ".swiper-wrapper",
        }}
        ref={blogRef}
      >
        <SwiperSlide className="item" onMouseEnter={handleMouseEnter}>
          <div className="cover">
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="information">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item" onMouseEnter={handleMouseEnter}>
          <div className="cover">
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="information">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item" onMouseEnter={handleMouseEnter}>
          <div className="cover">
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="information">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item" onMouseEnter={handleMouseEnter}>
          <div className="cover">
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="information">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="item" onMouseEnter={handleMouseEnter}>
          <div className="cover">
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="information">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div css={paginationStyle} className="swiper-pagination"></div>
    </div>
  );
}

const mainBlogStyle = css`
  position: relative;
`;

const paginationStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;

  .swiper-pagination-bullet {
    border-radius: 50%;
    width: 14px;
    height: 14px;
    display: inline-block;
    cursor: pointer;
    border: 1px solid ${color.gray};

    &.swiper-pagination-bullet-active {
      border: 1px solid ${color.brand};
      background: ${color.brand};
    }
  }

  .swiper-pagination-bullet + .swiper-pagination-bullet {
    margin-left: 6px;
  }
`;

const blogListStyle = css`
  padding-left: calc((50% - 1280px / 2));
  .swiper-slide {
    width: 400px;
  }

  .item {
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
  }

  .item .cover .image {
    width: 400px;
    height: 264px;
  }

  .item .information {
    margin-top: 12px;
    position: relative;
  }

  .item .information p {
    display: inline-block;
    font-size: 16px;
    width: 82%;
  }

  .item .information span {
    float: right;
    font-size: 14px;
    line-height: 25px;
    color: ${color.gray};
  }
`;

export default MainBlog;
