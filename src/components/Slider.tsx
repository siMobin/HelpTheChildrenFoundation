"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "./ui/button";

const Slider = () => {
  const [swiper, setSwiper] = useState<SwiperCore | null>(null);

  return (
    <section className="w-full relative group">
      <Swiper
        onSwiper={setSwiper}
        modules={[Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
        className="h-[30dvh] md:h-[50dvh] lg:h-[calc(100dvh-4.5rem)] w-full"
      >
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="/images/asset-11.png"
              alt="Daily Ten School"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <div className="flex flex-col gap-4 items-center">
                <p className="text-white text-4xl font-bold text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  <br />
                  Pariatur, ipsa.
                </p>
                <Button>Learn More</Button>
              </div>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/asset-12.svg"
              alt="Daily Ten School"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 2</p>
            </div> */}
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <img
              src="images/asset-21.svg"
              alt="Daily Ten School"
              className="w-full h-full object-cover"
            />
            {/* <div className="__slider">
              <p className="text-white text-4xl font-bold">Dummy Text 3</p>
            </div> */}
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="absolute top-1/2 -translate-y-1/2 w-full flex justify-between px-8 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button onClick={() => swiper?.slidePrev()} className="__slider-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button onClick={() => swiper?.slideNext()} className="__slider-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Slider;
