import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay} from 'swiper/modules';

import partnyor1 from "../../assets/images/home/partnyor1.svg"
import partnyor2 from "../../assets/images/home/partnyor2.svg"
import partnyor3 from "../../assets/images/home/partnyor3.svg"
import partnyor4 from "../../assets/images/home/partnyor4.svg"
import partnyor5 from "../../assets/images/home/partnyor5.svg"

const Partnyor = () => {
  return (
    <div className="partnyorlar">
        <h1>Partnyolarımız</h1>
        <Swiper
        slidesPerView={5}
        spaceBetween={30}
        autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'><img src={partnyor1} alt="" /></SwiperSlide>
        <SwiperSlide className='slide'><img src={partnyor2} alt="" /></SwiperSlide>
        <SwiperSlide className='slide'><img src={partnyor3} alt="" /></SwiperSlide>
        <SwiperSlide className='slide'><img src={partnyor4} alt="" /></SwiperSlide>
        <SwiperSlide className='slide'><img src={partnyor5} alt="" /></SwiperSlide>
        <SwiperSlide className='slide'><img src={partnyor1} alt="" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Partnyor