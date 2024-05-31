import React from "react";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { formatPrice } from "../utils/formatPrise";
import { Link, useNavigate } from "react-router-dom";
const info = [
  {
    id: 1,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/5-2Qh3der08wcaM4kaOckVxA73BHGErUZn6Q7jdndxA/t:0::0:0/pd:60:30:60:30/rs:fit:364:156:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzUwMTM1ODIucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 2,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/ovZGvg3Uf1rVS0NDM_qYfUN3jA4XxrA72Pfoiv-A0g8/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxOTM4OTgucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 3,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 4,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/-dAUuiUeUWVFtR3Bg8e_Lh4yEBA7D1K2Ua3Asm2HU8Q/t:0::0:0/pd:30:30:30:30/rs:fit:364:364:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5OTI1NjQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 5,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/pgqf59hBum2_fKyjsGxMKj8CYCI59ppCvHFxBZ2iCAQ/t:0::0:0/pd:60:30:60:30/rs:fit:364:156:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzUxNjU5NDYucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 6,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 7,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 8,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 9,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/I8DHu5sTDGU98tCmg5gZ0o5L6-_BImN6dWIg__oV04w/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxNzA4NjIucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
];
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

  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">Mebellar to'plami</h1>

        <div className="furniture_wrap">
          {info.map((item) => {
            return (
              <div key={item.id} className="newsCard  news-Slide-up">
                <div className="newsCard_img">
                  <img src={item.img} />
                </div>
                <div className="newsCaption">
                  <h2 className="newsCaption-title">{item.name}</h2>
                  <div className="newsCaption-content">
                    {/* <p>{item.description}</p> */}
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
                      to={`/furnitures/${item.id}`}
                    >
                      Batafsil
                    </Link>
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
