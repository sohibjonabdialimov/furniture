import React from "react";
import grid from "../assets/grid.jpg";
const Information = () => {
  return (
    <div className="sm:p-24 p-8 pb-5">
      <h1 className="text-#1F2937 text-[26px] sm:text-4xl sm:mb-12 mb-4 sm:font-semibold font-bold">
        Onlayn mebel do'koni qulayliklari
      </h1>
      <div className="w-[100%] ">
        <p className="text-lg leading-8 text-justify mb-5">
          E-Mebel.uz onlayn do'koni mijozlarga qimmat bo'lmagan o'zimizning va
          zamonaviy yevropa sifatidagi chet el mebellarini taqdim etadi. Biz
          xalqaro va mahalliy kelishuvlar tufayli yangi modellarni ishlab
          chiqamiz va assortimentlarimizni kengaytiramiz. Bizning mebellarimiz
          uchun kafolat muddati 10 oydan boshlanadi. Yetkazib berish Toshkent
          shahar va barcha viloyatlar bo'ylab amalga oshiriladi. Biz muntazam
          ravishda aksiyalar o'tkazamiz va siz mebelni katta chegirma bilan
          sotib olishingiz mumkin. Bu ham yetmagandik siz mebellarimizni 12 oyga
          boshlang'ich to'lovlarsiz va foizsiz bo'lib-bo'lib to'lashingiz
          mumkin. Bularning barchasi bizda va barchasi siz mijozlar uchun!
        </p>
        <div>
          <img src={grid} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Information;
