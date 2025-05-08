import React from "react";
import { useEffect, useState } from "react";
import { formatPrice } from "../utils/formatPrise";
import { Link } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import { formatImage } from "../utils/formatImage";

const Furniture = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axiosT.get(`/admin/getCategoryBy/${window.location.pathname.split("/")[2]}`).then((res) => {
      console.log(res.data.getCategoryById);
      setData(res.data.getCategoryById);
    }).catch((err) => {
      console.log(err);
    });
  }, [])


  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">{data.categoryName}</h1>

        <div className="furniture_wrap">
          {data.Products?.length ? data.Products.map((item) => {
            return (
              <div key={item.uuid} className="newsCard news-Slide-up">
                <div className="newsCard_img">
                  <img src={`http://localhost:7000/${item.img}`} />
                </div>
                <div className="newsCaption">
                  <h2 className="newsCaption-title">{item.name}</h2>
                  <div className="newsCaption-content">
                    <div className="newsCaption_prise">
                      <p>{formatPrice(item.current_price)} UZS</p>
                      <p>{formatPrice(item.discount_price)}</p>
                    </div>
                    <p className="newsCaption_color">
                      Asosiy rangi: <span>{item.color}</span>
                    </p>
                    <p className="newsCaption_country">
                      Ishlab chiqarilgan: <span>{item.country}</span>
                    </p>
                  </div>
                  <p>
                    <Link
                      className="newsCaption-link"
                      to={`/furnitures/${item.uuid}`}
                    >
                      Batafsil
                    </Link>
                  </p>
                </div>
              </div>
            );
          }) : <h1 className="w-full text-2xl">Kategoriyaga mahsulot qo'shilmagan</h1>
        
        }
        </div>
      </div>
    </div>
  );
};

export default Furniture;

{
  /* <div onClick={() => {navigate(`/furnitures/${item.id}`)}} key={item.id} className="furniture_item cursor-pointer">
<div className="furniture_img">
  <img src={item.img} alt="" />
  {false ? (
    <img src={fill_heart} alt="" />
  ) : (
    <img src={heart} alt="" />
  )}
  <img onClick={() => addBacketFunction()} src={basket} alt="" />
</div>
<div className="furniture_content">
  <h3>{item.category}</h3>
  <p>
    <span>Nomi: </span>
    {item.name}
  </p>
  <p>
    <span>Narxi: </span>
    {item.price}
  </p>
  <p>
    <span>Qolgan mahsulotlar soni: </span>
    {item.count}
  </p>
</div>
</div> */
}
