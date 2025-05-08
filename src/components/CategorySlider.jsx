import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { axiosT } from "../services/api/axios";
import { formatPrice } from "../utils/formatPrise";
import { useNavigate } from "react-router-dom";

const CategorySlider = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    axiosT
      .get("/admin/getCategoryBy/c4c56666-5bb7-41e2-8ff5-a42885f4e279")
      .then((res) => {
        console.log(res.data.getCategoryById.Products);
        setData(res.data.getCategoryById.Products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="sm:p-24 p-8 pb-10 categorySlider">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-8 mb-4 sm:font-semibold font-bold">
        Ommabop mebellar
      </h1>

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
        {data.map((item) => {
          return (
            <SwiperSlide onClick={() => {navigate(`/furnitures/${item.uuid}`)}} key={item.uuid}>
              <div className="autoslider_wrap">
                <div className="autoslider_img">
                  <img className="w-[100%] rounded-2xl" src={`http://localhost:7000/${item.img}`} alt="" />
                  <div>
                    <p>Chegirma</p>
                    <p>-{" "}
                  {Math.floor(
                    (1 - item.current_price / item.discount_price) * 100
                  )}{" "}
                  %</p>
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

export default CategorySlider;
