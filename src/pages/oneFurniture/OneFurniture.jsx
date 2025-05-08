import React, { useContext, useEffect, useState } from "react";
import img from "../../assets/c12.jpg";
import "./style.css";
import { formatPrice } from "../../utils/formatPrise";
import { myOrderContext } from "../../services/providers/orderContext";
import { axiosT } from "../../services/api/axios";
const OneFurniture = () => {
  const { myOrder, setMyOrder } = useContext(myOrderContext);
  const [data, setData] = useState({});
  const [bool, setBool] = useState(true);

  useEffect(() => {
    myOrder.forEach((item) => {
      if (item.uuid === data.uuid) {
        setBool(false);
      }
    });
  }, [window.location.pathname]);
console.log(bool);
  useEffect(() => {
    axiosT
      .get(`/admin/getProductBy/${window.location.pathname.split("/")[2]}`)
      .then((res) => {
        setData(res.data.getProductById);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [window.location.pathname]);
  function addOrder() {
    if (myOrder.length) {
      let is_equal = myOrder.every((item) => item.uuid !== data.uuid);
      if(is_equal){
        data.count = 1;
        delete data.product_id;
        delete data.CategoryUuid;
        delete data.createdAt;
        delete data.updatedAt;
        delete data.deletedAt;
        setMyOrder((prev) => [...prev, data]);
        setBool(false);
      }
    } else {
      data.count = 1;
      delete data.product_id;
      delete data.CategoryUuid;
      delete data.createdAt;
      delete data.updatedAt;
      delete data.deletedAt;
      setMyOrder((prev) => [...prev, data]);
      setBool(false);
      }
    }
  localStorage.setItem("order", JSON.stringify(myOrder));
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 pb-32 mx-auto">
        <h1 className="common_title">{data.name}</h1>
        <div className="one_wrap">
          <div className="one_content">
            <div className="one_desc">
              <p>{data.description}</p>
              <hr />
              <div className="one_prise">
                <p>{formatPrice(data.current_price)} UZS</p>
                <p>{formatPrice(data.discount_price)}</p>
                <p>
                  -{" "}
                  {Math.floor(
                    (1 - data.current_price / data.discount_price) * 100
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
                    Uzunligi: {data.length} sm, Kengligi: {data.weight} sm,
                    Balandligi: {data.height} sm
                  </p>
                </div>
                <div>
                  <h4>
                    Rangi: <span>{data.color}</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Ishlab chiqarilgan mamlakati: <span>{data.country}</span>
                  </h4>
                </div>
              </div>
              {bool ? (
                <button onClick={() => addOrder()}>Savatga qo'shish</button>
              ) : (
                <button
                >
                  Savatga qo'shilgan
                </button>
              )}
            </div>
            <div className="one_img">
              <img src={data.img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneFurniture;
