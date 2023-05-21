import React, { useState } from "react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import music1 from "./mp3/music1.mp3";
import music2 from "./mp3/music2.mp3";
import one from "./image/moka.png";
import two from "./image/siva.png";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
SwiperCore.use([Navigation, Pagination]);

const SwiperWithMusic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMusic1Muted, setIsMusic1Muted] = useState(false);
  const [isMusic2Muted, setIsMusic2Muted] = useState(true);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setCurrentIndex(currentIndex);
    if (currentIndex === 0) {
      setIsMusic1Muted(false);
      setIsMusic2Muted(true);
    } else {
      setIsMusic1Muted(true);
      setIsMusic2Muted(false);
    }
  };

  const handleCarouselClick = (direction) => {
    if (direction === "left") {
      swiperInstance.slidePrev();
    } else {
      swiperInstance.slideNext();
    }
  };

  return (
    <div className="div">
      <Swiper
        spaceBetween={30}
        onSlideChange={(swiper) => handleSlideChange(swiper)}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
      >
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img src={two} />
        </SwiperSlide>
        <SwiperSlide style={{ display: "flex", justifyContent: "center" }}>
          <img src={one} />
        </SwiperSlide>
      </Swiper>

      <audio
        src={currentIndex === 0 ? music1 : music2}
        autoPlay
        muted={currentIndex === 0 ? isMusic1Muted : isMusic2Muted}
        loop
      />

      <div className="navigation container">
        <button
          onClick={() => handleCarouselClick("left")}
          className="prev myButton"
        >
          <ArrowBackIcon />
        </button>
        <button
          onClick={() => handleCarouselClick("right")}
          className="next myButton"
        >
          <ArrowForwardIcon />
        </button>
      </div>

      <style jsx>{`
        .navigation {
          align-items: end;
          justify-content: end;
          display: flex;
        }

        .prev,
        .next {
          font-size: 1.2rem;
          padding: 0.5rem 2rem;
          background-color: #fff;
          border: none;
          border-radius: 0.5rem;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          margin: 0 0.3rem;
        }

        @media (max-width: 768px) {
          .navigation {
            bottom: 5px;
          }

          .prev,
          .next {
            font-size: 1rem;
            padding: 0.3rem 0.7rem;
          }
        }
      `}</style>
    </div>
  );
};

export default SwiperWithMusic;
