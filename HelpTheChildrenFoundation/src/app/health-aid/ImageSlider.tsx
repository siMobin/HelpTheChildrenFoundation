"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

// Define an array of image URLs
const images = [
  "/images/health/b_a_post.jpg",
  "/images/health/b_a_post-1.jpg",
  "/images/health/b_a_post-2.jpg",
];

const ImageSlider = () => {
  return (
    <Swiper
      effect="fade"
      fadeEffect={{ crossFade: true }}
      slidesPerView={1}
      speed={2000} // fade duration
      autoplay={{
        delay: 3000, // fade interval
        disableOnInteraction: false, // disable autoplay on user interaction
      }}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, Pagination, EffectFade]}
      className="mySwiper"
    >
      {images.map((src, index) => (
        <SwiperSlide key={index}>
          <img
            src={src}
            alt="HCF"
            className="rounded-lg shadow-lg w-full h-auto"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageSlider;
