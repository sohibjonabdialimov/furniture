import React, { useEffect, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import { formatPrice } from "../utils/formatPrise";
const AutoSlider = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosT
      .get("/admin/getCategoryBy/7e231627-8d70-4eb1-9d29-c5a8bdcd2bbd")
      .then((res) => {
        console.log(res.data.getCategoryById.Products);
        setData(res.data.getCategoryById.Products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="sm:p-24 p-8 pb-5">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Stol va stullar to'plami
      </h1>
      <p className="sm:w-3/4 w-[100%] text-lg leading-8 text-justify sm:text-start">
        E-Mebel.uz - haqiqatan ham qulay mebellarning onlayn-do'koni. Biz o'z
        mijozlarimizga ishlab chiqarishdagi zamonaviy mebellarni taklif etamiz
        va nafaqat mahsulotlarning yuqori sifatini, balki hamyonbop narxlarni
        ham taklif qilamiz. Va bizning muntazam aksiyalarimiz va maxsus
        takliflarimiz sizni hayratda qoldiradi!
      </p>
      <Swiper
        spaceBetween={20}
        grabCursor={true}
        loop={true}
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
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        slidesPerView={1}
        className="mySwiper mt-5 sm:mt-0 rounded-2xl"
      >
        {data.map((item) => {
          return (
            <SwiperSlide
              onClick={() => {
                navigate(`/furnitures/${item.uuid}`);
              }}
              key={item.uuid}
            >
              <div className="autoslider_wrap">
                <div className="autoslider_img">
                  <img
                    className="w-[100%] rounded-2xl"
                    src={`http://localhost:7000/${item.img}`}
                    alt=""
                  />
                  <div>
                    <p>Chegirma</p>
                    <p>
                      -{" "}
                      {Math.floor(
                        (1 - item.current_price / item.discount_price) * 100
                      )}{" "}
                      %
                    </p>
                  </div>
                </div>
                <div className="autoslider_content">
                  <h3>{item.name}</h3>
                  <div>
                    <p>{formatPrice(item.current_price)} UZS</p>
                    <p>{formatPrice(item.discount_price)}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default AutoSlider;
