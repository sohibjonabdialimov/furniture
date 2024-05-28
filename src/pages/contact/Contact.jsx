import React from "react";
import "./contact.css";
import location from "../../assets/icons8-location-50.png";
import phone from "../../assets/icons8-phone-50.png";
import mail from "../../assets/icons8-mail-50.png";
import clock from "../../assets/icons8-clock-50.png";
import delivery from "../../assets/icons8-delivery-50.png";
const Contact = () => {
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">Biz bilan bog'laning</h1>
        <div className="contact_wrap">
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={location} alt="" />
            </div>
            <div className="contact_content">
              <h3>Manzil:</h3>
              <p>
                Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi, 114-uy
              </p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={phone} alt="" />
            </div>
            <div className="contact_content">
              <h3>Telefon raqam:</h3>
              <p>+998 (91) 474-78-18</p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={mail} alt="" />
            </div>
            <div className="contact_content">
              <h3>E-mail</h3>
              <p>info@mebel.uz</p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={clock} alt="" />
            </div>
            <div className="contact_content">
              <h3>Ish vaqti / Ish tartibi</h3>
              <p>Har kuni 08:00 dan 22:00 gacha</p>
            </div>
          </div>
          <div className="contact_item">
            <div className="contact_img_wrap">
              <img src={delivery} alt="" />
            </div>
            <div className="contact_content">
              <h3>Yetkazib berish kunlari:</h3>
              <p>Seshanba, payshanba va shanba kunlari</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
