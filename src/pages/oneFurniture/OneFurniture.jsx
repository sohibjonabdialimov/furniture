import React, { useContext, useState } from "react";
import img from "../../assets/c12.jpg";
import "./style.css";
import { formatPrice } from "../../utils/formatPrise";
import { useNavigate } from "react-router-dom";
import { myOrderContext } from "../../services/providers/orderContext";
const OneFurniture = () => {
  const navigate = useNavigate();
  const { myOrder, setMyOrder } = useContext(myOrderContext);
  const [bool, setBool] = useState(false);
  const obj = {
    id: 8,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 5522255,
    current_price: 1225566,
  };
  myOrder.forEach((item) => {
    if(item.id == obj.id){
      setBool(true);
    }else{
      setBool(false);
    }
  })
  function addOrder() {
    obj.count = 1;
    setMyOrder((prev) => [...prev, obj]);
    console.log(obj);
  }
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 pb-32 mx-auto">
        <h1 className="common_title">{obj.name}</h1>
        <div className="one_wrap">
          <div className="one_content">
            <div className="one_desc">
              <p>{obj.description}</p>
              <hr />
              <div className="one_prise">
                <p>{formatPrice(obj.current_price)} UZS</p>
                <p>{formatPrice(obj.discount_price)}</p>
                <p>
                  -{" "}
                  {Math.floor(
                    (1 - obj.current_price / obj.discount_price) * 100
                  )}{" "}
                  %
                </p>
              </div>
              <hr />
              <div className="one_feature">
                <h3>Xususiyatlari</h3>
                <div>
                  <h4>O'lchamlari: </h4>
                  <p>
                    Uzunligi: {246} sm, Kengligi: {256} sm, Balandligi: {1456}{" "}
                    sm
                  </p>
                </div>
                <div>
                  <h4>
                    Rangi: <span>{obj.color}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Ishlab chiqarilgan mamlakati: <span>{obj.country}</span>
                  </h4>
                </div>
              </div>
              {bool ? (
                <button onClick={() => addOrder()}>Savatga qo'shish</button>
              ) : (
                <button
                  onClick={() => {
                    navigate("/order");
                  }}
                >
                  Savatga qo'shilgan
                </button>
              )}
            </div>
            <div className="one_img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneFurniture;
