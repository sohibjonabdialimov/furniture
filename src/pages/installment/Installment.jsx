import React from "react";
import plan from "../../assets/chegirma.png";
import "./style.css";

const Installment = () => {
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">To'lov rejasi</h1>
        <div className="common_red_line"></div>
        <h2 className="plan_subtitle">❗️HOZIR OLING - KEYIN TO'LANG❗️</h2>
        <div className="installment_wrap">
          <img src={plan} alt="" />
          <div className="installment_content">
            <h3>❗️CHEGIRMA BILAN TO'LASH❗️</h3>
            <div className="mb-4">
              <p>MEBELNI HOZIR OLING - to'lovni keyinroq to'lang!</p>
            </div>
            <div className="mb-4">
              <p>
                Ajoyib chegirmalardan tashqari, siz 10 yoki 12 oygacha bo'lgan
                foizsiz to'lovlarga ishonishingiz mumkin va bu hammasi emas!
              </p>
            </div>
            <div className="mb-4">
              <p>Solfy kartasi bilan:</p>
              <p>0% - Boshlang'ich to'lov</p>
              <p>0% - Yillik</p>
              <p>- Yashirin to'lovlarsiz</p>
              <p>- 10 oygacha to'lov</p>
            </div>
            <div className="mb-4">
              <p>
                Shunchaki Solfy ilovasini appstoredan yoki playmarketdan
                yuklab oling, ro'yxatdan o'ting, Solfy plastik kartasini oling va shaxsiy hisobingizga kerakli
                miqdorda to'ldiring. 
              </p>
            </div>
            <div className="mb-4">
              <p>Bank orqali:</p>
              <p>0% - Boshlang'ich to'lov</p>
              <p>0% - Yillik</p>
              <p>to'lov 12 oygacha</p>
            </div>
            <div className="mb-4">
              <p>Batafsil ma'lumot uchun bizga qo'ng'iroq qiling/yozing:</p>
            </div>
            <div className="mb-4">
              <p>+998 (91) 474-78-18</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Installment;
