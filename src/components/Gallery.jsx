import React from "react";
import i1 from "../assets/1.jpg";
import i2 from "../assets/2.jpg";
import i3 from "../assets/3.jpg";
import i4 from "../assets/4.jpg";
import i5 from "../assets/5.jpg";
import i6 from "../assets/6.jpg";
import i7 from "../assets/7.jpg";
import i8 from "../assets/8.jpg";
import i9 from "../assets/9.jpg";
import i10 from "../assets/10.jpg";
import i11 from "../assets/11.jpg";
import i12 from "../assets/12.jpg";

const Gallery = () => {
  return (
    <div className="sm:p-24 p-8 pb-10">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Zamonaviy mebellar
      </h1>
      <div className="gallery mt-5 sm:mt-0">
        <div className="i1 sm:block hidden">
          <img src={i1} alt="" />
        </div>
        <div className="i2">
          <img src={i2} alt="" />
        </div>
        <div className="i3">
          <img src={i3} alt="" />
        </div>
        <div className="i4">
          <img src={i4} alt="" />
        </div>
        <div className="i5">
          <img src={i5} alt="" />
        </div>
        <div className="i6 sm:block hidden">
          <img src={i6} alt="" />
        </div>
        <div className="i7 sm:block hidden">
          <img src={i7} alt="" />
        </div>
        <div className="i8">
          <img src={i8} alt="" />
        </div>
        <div className="i9">
          <img src={i9} alt="" />
        </div>
        <div className="i10">
          <img src={i10} alt="" />
        </div>
        <div className="i11">
          <img src={i11} alt="" />
        </div>
        <div className="i12 sm:block hidden">
          <img src={i12} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
