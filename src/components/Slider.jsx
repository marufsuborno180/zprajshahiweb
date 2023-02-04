import React from 'react'
import logo from '../assets/img/zila_parishad_rajshahi_logo.png'
import SlIMG1 from "../assets/img/2.webp"
import SlIMG2 from "../assets/img/3.webp"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, Pagination, EffectFade } from "swiper";

function Slider() {
  return (
    <>
      <div className="sliderPart">
        <div className="content">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            effect={"fade"}
            modules={[Autoplay, Pagination, EffectFade]}
            className="mySwiper bigswiper"
          >
            <SwiperSlide>
              <img src={SlIMG1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={SlIMG2} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="logo_text">
          <Link to="/" className='row'>
            <img src={logo} alt="" />
            <div className="text">
              <h1>জেলা পরিষদ, রাজশাহী।</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Slider
