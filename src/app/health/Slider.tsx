"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { Button } from "@/components/ui/button";

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
        autoplay={{ delay: 5999000 }}
        loop={true}
        className="h-[30dvh] md:h-[50dvh] lg:h-[calc(100dvh-4.5rem)] w-full"
      >
        <SwiperSlide>
          <div className="__s_container bg-[url('/images/school/education-bg.svg')] bg-no-repeat bg-cover px-4">
            <img
              src="\images\health\food-student.png"
              alt=""
              loading="lazy"
              className="h-full"
            />

            <img
              src="\images\health\paper-bg.svg"
              alt=""
              loading="lazy"
              className="w-full absolute bottom-0 left-0 h-40 object-top object-cover"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="__s_container">
            <div className="__s_container bg-secondary bg-no-repeat bg-cover px-">
              <div className="flex justify-between items-center h-full">
                <div className="max-w-xl text-">
                  <span className="italic text-2xl border-l-24 border-accent ">
                    #Did you know
                  </span>
                  <h1 className="ml-6">
                    80% of our memories are determined by what we see
                  </h1>
                </div>
                <img
                  src="\images\health\see.png"
                  alt=""
                  loading="lazy"
                  className="h-full"
                />
              </div>

              <img
                src="\images\health\paper-bg.svg"
                alt=""
                loading="lazy"
                className="w-full absolute bottom-0 left-0 h-40 object-top object-cover"
              />
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="__s_container">
            <div className="__s_container bg-secondary bg-no-repeat bg-cover px-">
              <div className="flex justify-between items-center h-full">
                <img
                  src="\images\health\fruits-buffet-1.jpg"
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>

              <img
                src="\images\health\paper-bg.svg"
                alt=""
                loading="lazy"
                className="w-full absolute bottom-0 left-0 h-40 object-top object-cover z-[999999]"
              />
            </div>
            <div className="__slider !justify-start flex-col gap-8 p-8 text-left text-white bg-linear-to-b from-primary/50 to-secondary/50">
              <h1 className="text-accent text-6xl font-bold text-left">
                Fruits Buffet Festival
              </h1>
              <p className="max-w-xl">
                At Daily Ten School, we had the joy of organizing a vibrant
                Fruits Buffet for the underprivileged children of our Badda and
                Basabo campuses. This special event was designed to introduce
                students to a variety of nutritious local fruits, ensuring they
                experience both the taste and health benefits of nature’s best
                offerings.
              </p>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="__s_container">
            <div className="__s_container bg-primary bg-no-repeat bg-cover px-">
              <section className="flex h-full text-white">
                <div className="flex justify-between items- h-full">
                  <div className="max-w-xl text-">
                    {/* <span className="italic text-2xl border-l-24 border-accent ">
                      #Did you know
                    </span> */}
                    <h1 className="ml-6 mt-8 text-5xl font-semibold leading-14">
                      <span className="font-bold">Hunger &nbsp;</span>
                      is not just a food issue, it's a&nbsp;
                      <span className="font-bold">human&nbsp;</span>
                      right issue.
                    </h1>
                  </div>
                  <img
                    src="\images\health\food-hero-1.jpg"
                    alt=""
                    loading="lazy"
                    className="h-full w-[50%] object-cover"
                  />
                </div>
                {/*  */}

                <div className="flex justify-between items- h-full">
                  <div className="max-w-xl text-">
                    {/* <span className="italic text-2xl border-l-24 border-accent ">
                      #Did you know
                    </span> */}
                    <h1 className="mx-6 mt-8 text-5xl font-semibold leading-14">
                      There is
                      <span className="font-bold">
                        &nbsp;nothing unhealthy&nbsp;
                      </span>
                      about educating children about
                      <span className="font-bold">&nbsp;nutrition</span>.
                    </h1>
                  </div>
                  <img
                    src="\images\health\food-hero-3.jpg"
                    alt=""
                    loading="lazy"
                    className="h-full w-[50%] object-cover"
                  />
                </div>
                {/*  */}
              </section>
              {/*  */}

              <img
                src="\images\health\paper-bg.svg"
                alt=""
                loading="lazy"
                className="w-full absolute bottom-0 left-0 h-30 object-top object-cover"
              />
            </div>

            {/*  */}

            {/*  */}
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
