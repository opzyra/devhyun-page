import { useEffect, useRef } from "react";
import { css } from "@emotion/react";

import anime from "animejs";
import { Mousewheel, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { color } from "@/styles";
import Image from "@/components/common/Image";

import ImageAboutperiod from "@/assets/images/image-aboutperiod.png";

function Blog() {
  const blogRef = useRef(null);

  const handleMouseEnter = (event) => {
    const blogInst = blogRef.current;
    anime
      .timeline()
      .add({
        targets: blogInst.querySelectorAll(".blogItem"),
        opacity: 0.6,
        scale: 0.98,
        duration: 0,
      })
      .add({
        targets: event.target.classList.contains(".blogItem")
          ? event.target
          : event.target.closest(".blogItem"),
        opacity: 1,
        scale: 1,
        duration: 0,
      });
  };

  const handleMouseLeave = () => {
    const blogInst = blogRef.current;
    anime({
      targets: blogInst.querySelectorAll(".blogItem"),
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
    <div css={blog}>
      <Swiper
        modules={[Mousewheel, Pagination]}
        observer={true}
        observeParents={true}
        css={blogGrid}
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
        <SwiperSlide className="blogItem" onMouseEnter={handleMouseEnter}>
          <div>
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="blogInformation">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blogItem" onMouseEnter={handleMouseEnter}>
          <div>
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="blogInformation">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blogItem" onMouseEnter={handleMouseEnter}>
          <div>
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="blogInformation">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blogItem" onMouseEnter={handleMouseEnter}>
          <div>
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="blogInformation">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
        <SwiperSlide className="blogItem" onMouseEnter={handleMouseEnter}>
          <div>
            <Image src={ImageAboutperiod} layout="responsive" alt="" />
          </div>
          <div className="blogInformation">
            <p>VScode에서 Draw.io를 사용하기</p>
            <span>21.09.02</span>
          </div>
        </SwiperSlide>
      </Swiper>
      <div css={pagination} className="swiper-pagination"></div>
    </div>
  );
}

const blog = css`
  position: relative;
`;

const pagination = css`
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

const blogGrid = css`
  padding-left: calc((50% - 1280px / 2));

  .swiper-slide {
    width: 400px;
  }

  .blogItem {
    transition: opacity 150ms linear 100ms, transform 150ms ease-in-out 100ms;
  }

  .image {
    width: 400px;
    height: 264px;
  }

  .blogInformation {
    p {
      display: inline-block;
      font-size: 16px;
      width: 82%;
    }

    span {
      float: right;
      font-size: 14px;
      line-height: 25px;
      color: ${color.gray};
    }
  }
`;

export default Blog;
