import React from "react";
import g1 from "../../assets/g1_divan.jpg";
import g2 from "../../assets/g2_komad.jpg";
import g3 from "../../assets/g3_burchakli_divan.jpg";
import g4 from "../../assets/g4_stul.jpg";
import g5 from "../../assets/g5_matras.jpg";
import g6 from "../../assets/g6_shkaf.jpg";
import "./grid.css";
const data = [
  {
    id: 1,
    title: "Divan va kreslolar",
    key: "divan-va-kreslolar",
    count: 42,
    img: g1,
  },
  {
    id: 2,
    title: "Komadlar",
    key: "komadlar",
    count: 24,
    img: g2,
  },
  {
    id: 3,
    title: "Burchakli divanlar",
    key: "burchakli-divanlar",
    count: 30,
    img: g3,
  },
  {
    id: 4,
    title: "Stullar",
    key: "stullar",
    count: 18,
    img: g4,
  },
  {
    id: 5,
    title: "Matraslar",
    key: "matraslar",
    count: 13,
    img: g5,
  },
  {
    id: 6,
    title: "Shkaflar",
    key: "shkaflar",
    count: 100,
    img: g6,
  },
];

import { useNavigate } from "react-router-dom";
const GridCategory = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Ommabop mebellar
      </h1>
      <div className="grid_category mt-5 sm:mt-0">
        {data.map((item) => {
          return (
            <div
              key={item.id}
              onClick={() => {
                navigate(`/category/${item.key}`);
              }}
              className="grid_box cursor-pointer"
            >
              <img src={item.img} alt="" />
              <div className="grid_name">
                <div>
                  <p>{item.title}</p>
                  <p>{item.count} ta mahsulot</p>
                </div>
              </div>
              <div className="grid_clip_path">
                <p>3 454 280 UZS dan boshlab</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridCategory;
