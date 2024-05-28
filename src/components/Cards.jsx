import React from "react";
import { Home1, Home2, Home3 } from "../assets/home";
import a1 from "../assets/a5.jpg";
import a2 from "../assets/a6.webp";
import a3 from "../assets/a4.jpg";

const Cards = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-2 sm:font-semibold font-bold">
        To'liq to'plamdagi mebellar
      </h1>
      <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-4 gap-y-5 mt-5 sm:mt-0">
        <div className="sm:m-6 m-0 relative overflow-hidden bg-orange-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
          <Home1 />
          <div className="relative w-[100%] h-[24rem] pt-10 px-8 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <div className="cards_img rounded">
              <img className="relative rounded" src={a1} alt="" />
            </div>
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Indoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                Oq rangdagi to'plam
              </span>
              <span className="bg-white rounded-full text-orange-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                15 000 000 so'm
              </span>
            </div>
          </div>
        </div>
        <div className="sm:m-6 m-0 relative overflow-hidden bg-teal-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
          <Home2 />
          <div className="relative w-[100%] h-[24rem] pt-10 px-8 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <div className="cards_img rounded">
              <img className="relative rounded" src={a2} alt="" />
            </div>
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Outdoor</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                Ko'k rangdagi to'plam
              </span>
              <span className="bg-white rounded-full text-teal-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                18 000 000 so'm
              </span>
            </div>
          </div>
        </div>
        
        <div className="sm:m-6 m-0 relative overflow-hidden bg-purple-500 rounded-lg shadow-lg furniture_ad_card w-[100%]">
          <Home3 />
          <div className="relative w-[100%] h-[24rem] pt-10 px-8 flex items-center justify-center">
            <div className="block absolute w-48 h-48 bottom-0 left-0 -mb-24 ml-3"></div>
            <div className="cards_img rounded">
              <img className="relative rounded" src={a3} alt="" />
            </div>
          </div>
          <div className="relative text-white px-6 pb-6 mt-6">
            <span className="block opacity-75 -mb-1">Oak Tree</span>
            <div className="flex justify-between">
              <span className="block font-semibold text-xl">
                Qora rangdagi to'plam
              </span>
              <span className="bg-white rounded-full text-purple-500 text-xs font-bold px-3 py-2 leading-none flex items-center">
                20 000 000 so'm
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
