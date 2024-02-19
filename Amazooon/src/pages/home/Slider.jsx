import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import "./Slider.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const banners = [
  "https://m.media-amazon.com/images/I/7195oHPNnTL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/615JvuJs-2L._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/61-t7nfD-rL._SX3000_.jpg",
  "https://m.media-amazon.com/images/I/71erLF1rQsL._SX3000_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/prime/Gateway/2020/May/gaming_3000x1200._CB431281466_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/Feb/NC/D21052619_WLA_BAU_GW-heroes_Headsets_FPF_FEB_DesktopTallHero_3000x1200._CB660350658_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Audio/MI/Final/MI_Gw_3000x1200._CB659658858_.jpg",
];

function Slider() {
  return (
    <div className="banner">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {" "}
        {banners.map((banner, index) => (
          <SwiperSlide>
            <img key={index} src={banner} alt="banner" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
