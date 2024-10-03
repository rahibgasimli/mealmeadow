import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Autoplay, Pagination } from 'swiper/modules';
import SlideTemp from './SlideTemp';

const HomeMainSlide = () => {
  return (
    <>
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="home-swipper"
      >
        <SwiperSlide><SlideTemp/></SwiperSlide>
        <SwiperSlide><SlideTemp/></SwiperSlide>
      </Swiper>
    </>
  )
}

export default HomeMainSlide