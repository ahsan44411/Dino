import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import on from "./1.png";
import on2 from "./2.png";
import on3 from "./3.png";
import on4 from "./4.png";
import on5 from "./5.png";
import on6 from "./6.png";
import on7 from "./7.png";
import on8 from "./8.png";
import { Navigation, Pagination, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./styles.css";

// import required modules
import { EffectCards } from "swiper";

export default function App() {
  return (
    <>
      <div className="container slider_move">
        {" "}
        <Swiper
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Autoplay]}
          className="mySwiper"
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
        >
          <SwiperSlide>
            <img src={on} className="image_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={on2} className="image_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={on3} className="image_slider" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={on4} className="image_slider" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
