import React, { useRef, useState } from "react";
import "./contact.css";
import location from "../../assets/icons8-location-50.png";
import phone from "../../assets/icons8-phone-50.png";
import mail from "../../assets/icons8-mail-50.png";
import clock from "../../assets/icons8-clock-50.png";
import delivery from "../../assets/icons8-delivery-50.png";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const commitRef = useRef(null);
  const handleAdd = async (e) => {
    e.preventDefault();
    let data = {
      fullName: nameRef.current.value,
      email: emailRef.current.value,
      phoneNumber: phoneRef.current.value,
      commets: commitRef.current.value,
    };
    axiosT
      .post("/user/addCommet", data)
      .then((res) => {
        toast.info("Fikr mulohazalaringiz adminga jo'natildi", {
          position: "top-right",
        });
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
        commitRef.current.value = "";
      })
      .catch((err) => {
        console.log(err.response.data.error);
        if (
          err.response.data.error ===
          "Sorry, cannot write commet because user does not exist in the system"
        ) {
          toast.warn("Fikr bildirishdan oldin ro'yxatdan o'ting", {
            position: "top-right",
          });
        }
      });
  };
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
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
      <div className="container">
        <form
          onSubmit={handleAdd}
          className="w-full max-w-lg mx-auto mb-[100px] px-8 sm:px-0"
        >
          <h1 className="common_title">Biz haqimizda sizning fikringiz</h1>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-password"
              >
                To'liq ism sharifingiz
              </label>
              <input
                ref={nameRef}
                className="appearance-none block transition-all w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="name"
                type="text"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-password"
              >
                E-mail kiriting
              </label>
              <input
                ref={emailRef}
                className="appearance-none transition-all block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-password"
              >
                Telefon raqamingizni kiriting
              </label>
              <input
                ref={phoneRef}
                className="appearance-none transition-all block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="number"
                type="number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
                htmlFor="grid-password"
              >
                Fikr-mulohazalaringizni shu yerga qoldiring...
              </label>
              <textarea
                ref={commitRef}
                className="transition-all no-resize appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                id="message"
              ></textarea>
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3">
              <button
                className="shadow bg-[#1F2937] hover:bg-[#314155] transition-colors focus:shadow-outline focus:outline-none text-white font-bold py-3 px-10 rounded"
                type="submit"
              >
                Yuborish
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
