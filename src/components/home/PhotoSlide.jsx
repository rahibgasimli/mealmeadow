import React from 'react'

import slidePhoto from "../../assets/images/home/SlidePhoto.png"
import slidePhoto2 from "../../assets/images/home/SlidePhoto2.png"
import slidePhoto3 from "../../assets/images/home/SlidePhoto3.png"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { Autoplay } from 'swiper/modules';

const PhotoSlide = () => {
  return (
    <Swiper
        slidesPerView={2}
        spaceBetween={300}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="photo-slider"
      >
        <SwiperSlide className='photo-slide'><img src={slidePhoto} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slidePhoto2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={slidePhoto} alt="" /></SwiperSlide>
      </Swiper>
  )
}

export default PhotoSlide