import React from "react";
import g1 from "../../assets/g1_divan.jpg";
import g2 from "../../assets/g2_komad.jpg";
import g3 from "../../assets/g3_burchakli_divan.jpg";
import g4 from "../../assets/g4_stul.jpg";
import g5 from "../../assets/g5_matras.jpg";
import g6 from "../../assets/g6_shkaf.jpg";
import "./grid.css";
const GridCategory = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Ommabop mebellar
      </h1>
      <div className="grid_category mt-5 sm:mt-0">
        <div className="g1 grid_box">
          <img src={g1} alt="" />
          <div className="grid_name">
            <div>
              <p>Divan va kreslolar</p>
              <p>483 ta mahsulot</p>
            </div>
          </div>
          <div className="grid_clip_path">
            <p>3 454 280 UZS dan boshlab</p>
          </div>
        </div>
        <div className="g2 grid_box">
          <img src={g2} alt="" />
          <div className="grid_name">
            <div>
              <p>Komadlar</p>
              <p>483 ta mahsulot</p>
            </div>
          </div>
          <div className="grid_clip_path">
            <p>3 454 280 UZS dan boshlab</p>
          </div>
        </div>
        <div className="g3 grid_box">
          <img src={g3} alt="" />
          <div className="grid_name">
            <div>
              <p>Burchakli divanlar</p>
              <p>483 ta mahsulot</p>
            </div>
          </div>
          <div className="grid_clip_path">
            <p>3 454 280 UZS dan boshlab</p>
          </div>
        </div>
        <div className="g4 grid_box">
          <img src={g4} alt="" />
          <div className="grid_name">
            <div>
              <p>Stullar</p>
              <p>483 ta mahsulot</p>
            </div>
          </div>
          <div className="grid_clip_path">
            <p>3 454 280 UZS dan boshlab</p>
          </div>
        </div>
        <div className="g5 grid_box">
          <img src={g5} alt="" />
          <div className="grid_name">
            <div>
              <p>Matraslar</p>
              <p>483 ta mahsulot</p>
            </div>
          </div>
          <div className="grid_clip_path">
            <p>3 454 280 UZS dan boshlab</p>
          </div>
        </div>
        <div className="g6 grid_box">
          <img src={g6} alt="" />
          <div className="grid_name">
            <div>
              <p>Shkaflar</p>
              <p>483 ta mahsulot</p>
            </div>
          </div>
          <div className="grid_clip_path">
            <p>3 454 280 UZS dan boshlab</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridCategory;
