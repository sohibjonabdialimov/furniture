import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import i1 from "../assets/c1.webp";
import i2 from "../assets/c2.jpg";
import i3 from "../assets/c3.webp";
import i4 from "../assets/c4.jpg";
import i5 from "../assets/c11.jpg";
import i6 from "../assets/c12.jpg";
import i7 from "../assets/c13.jpg";
import i8 from "../assets/c14.jpg";

import { Autoplay, Pagination, Navigation } from "swiper/modules";
const CategorySlider = () => {
  return (
    <div className="sm:p-24 p-8 pb-10 categorySlider">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Bizning kategoriyalarimiz
      </h1>
      <p className="sm:w-3/4 w-[100%] text-lg leading-8 text-justify sm:text-start">Bizning onlayn-do'konimizda faqat e'tibor bilan tanlangan mebellar taqdim etilgan,bizning ajoyib mebellar – Toshkent va butun O'zbekiston bo'ylab yetkazib beriladi. Onlayn katalogimizdagi har bir divan ajoyib dizaynning timsolidir!</p>
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        navigation={true}
        className="mySwiper mt-5 sm:mt-0 rounded-2xl"
      >
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i1} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i2} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i3} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i4} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i5} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i6} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] h-60 rounded-2xl" src={i7} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="autoslider_wrap">
            <div className="autoslider_img">
              <img className="w-[100%] rounded-2xl" src={i8} alt="" />
              <div>
                <p>Chegirma</p>
                <p>-30%</p>
              </div>
            </div>
            <div className="autoslider_content">
              <h3>Divan Rint Bucle Beige</h3>
              <div>
                <p>1 380 680 UZS</p>
                <p>1 726 280</p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CategorySlider;
