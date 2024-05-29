import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import heart from "../assets/heart.png";
import fill_heart from "../assets/fill_heart.png";
import basket from "../assets/basket.png";
import { useNavigate } from "react-router-dom";
const Furniture = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      let list = [];
      try {
        const querySnapshot = await getDocs(collection(db, "products"));
        querySnapshot.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setData(list);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);
  console.log(data);
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">Mebellar to'plami</h1>

        <div className="furniture_wrap">
          {data.map((item) => {
            return (
              <div onClick={() => {navigate(`/furnitures/${item.id}`)}} key={item.id} className="furniture_item cursor-pointer">
                <div className="furniture_img">
                  <img src={item.img} alt="" />
                  {false ? (
                    <img src={fill_heart} alt="" />
                  ) : (
                    <img src={heart} alt="" />
                  )}
                  <img src={basket} alt="" />
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
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Furniture;
