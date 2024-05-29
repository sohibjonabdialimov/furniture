import React from "react";
import m1 from "../assets/main1.webp";
import m2 from "../assets/main2.webp";
import m3 from "../assets/main3.webp";
import m4 from "../assets/main4.webp";
import m5 from "../assets/main5.webp";
import m6 from "../assets/main6.webp";
import m7 from "../assets/main7.webp";
import m8 from "../assets/main8.webp";
import m9 from "../assets/main9.webp";
import { useNavigate } from "react-router-dom";
const data = [
  {
    id: 1,
    title: "Yotoqxona mebellari",
    key: "yotoqxona-mebellari",
    count: 31,
    img: m1,
  },
  {
    id: 2,
    title: "Bolalar mebellari",
    key: "bolalar-mebellari",
    count: 24,
    img: m2,
  },
  {
    id: 3,
    title: "Yumshoq mebellar",
    key: "yumshoq-mebellar",
    count: 28,
    img: m1,
  },
  {
    id: 4,
    title: "Oshxona mebellari",
    key: "oshxona-mebellari",
    count: 18,
    img: m4,
  },
  {
    id: 5,
    title: "Mehmonxona mebellari",
    key: "mehmonxona-mebellari",
    count: 13,
    img: m8,
  },
  {
    id: 6,
    title: "Matraslar va yostiqlar",
    key: "matraslar",
    count: 100,
    img: m5,
  },
  {
    id: 7,
    title: "Ofis uchun mebellar",
    key: "ofis-mebellari",
    count: 100,
    img: m7,
  },
  {
    id: 8,
    title: "Koridor mebellari",
    key: "koridor-mebellari",
    count: 14,
    img: m9,
  },
  {
    id: 9,
    title: "Stol va stullar",
    key: "stol-va-stullar",
    count: 31,
    img: m6,
  },
];
const MainCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">Kategoriyalar</h1>

        <div className="relative category">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:pb-28 pb-10">
            {data.map((item) => {
              return (
                <div onClick={() => {navigate(`/category/${item.key}`)}} key={item.id} className="w-full relative mx-auto h-auto overflow-hidden rounded-lg category_item">
                  <img
                    src={item.img}
                    alt="image"
                    className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
                  />
                  <div className="category_item_desc">
                    <p>{item.count} ta mahsulot</p>
                    <h2>{item.title}</h2>
                  </div>
                </div>
              );
            })}

            {/* <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <img
                src={m2}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <img
                src={m3}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg category_item">
              <img
                src={m4}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <img
                src={m5}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <img
                src={m6}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg category_item">
              <img
                src={m7}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <img
                src={m8}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div>
            <div className="w-full relative mx-auto h-auto overflow-hidden rounded-lg">
              <img
                src={m9}
                alt="image"
                className="w-full h-auto relative z-0 rounded-lg transition-all duration-300 hover:scale-110"
              />
              <div className="category_item_desc">
                <p>31 ta mahsulot</p>
                <h2>Yotoqxona mebellari</h2>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCategory;
