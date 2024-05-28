import React from "react";
import { formatPrice } from "../utils/formatPrise";
import heart from "../assets/heart.png";
import fill_heart from "../assets/fill_heart.png";
import clear from "../assets/delete.png";
import exp from "../assets/10.jpg";
import { Link } from "react-router-dom";

const Order = () => {
  return (
    <div className="container">
      <div className="hidden sm:block order_right">
        <h2>Umumiy summa: {formatPrice(16452600)} UZS</h2>
        <p className="mb-3">
          5 mahsulotlar miqdori uchun:{" "}
          <span className="font-bold">{formatPrice(16445600)} сум</span>
        </p>
        <p className="mb-3">
          Sizning chegirmangiz:{" "}
          <span className="text-red-600 font-bold">
            -{formatPrice(541452554)} сум
          </span>
        </p>
        <div className="flex flex-col gap-3">
          <Link
            to={"/send"}
            className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
          >
            Davom etish <span aria-hidden="true">&rarr;</span>
          </Link>
          <Link
            to={"/furnitures"}
            className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
          >
            Mebellar to'plamiga qaytish
          </Link>
        </div>
      </div>
      <div className="min-h-[90dvh] px-6 lg:px-12">
        <h1 className="common_title">Sizning savatingiz</h1>
        <div className="order_wrap">
          <div className="order_left">
            <div className="order_card">
              <div className="order_img">
                <img src={exp} alt="" />
              </div>
              <div className="order_content">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, neque distinctio est ex quam nobis iusto ipsa sit
                  illum tempore reiciendis eveniet rerum omnis a quaerat facere?
                  Unde, odio aut?
                </p>
              </div>
              <div className="order_info">
                <div className="order_price">
                  <p>{formatPrice(66165200)}</p>
                  <p>{formatPrice(39726800)} UZS</p>
                </div>
                <div className="order_info_buttons sm:w-[180px] w-[70px] sm:py-[8px] py-[5px] sm:px-[15px] px-[10px] flex items-center justify-between text-white rounded-[15px] gap-[15px]">
                  <button className="cursor-pointer">
                    <svg
                      viewBox="0 0 19 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
                    >
                      <path
                        d="M2 2.5H17.0033"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <p className="text-white inter sm:text-lg text-sm">5</p>

                  <button className="cursor-pointer">
                    <svg
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
                    >
                      <path
                        d="M2 9.5H17.0033"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.50195 1.99805V17.0013"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="order_info_img">
                  {true ? (
                    <img src={heart} alt="" />
                  ) : (
                    <img src={fill_heart} alt="" />
                  )}
                  <img src={clear} alt="" />
                </div>
              </div>
            </div>
            <div className="order_card">
              <div className="order_img">
                <img src={exp} alt="" />
              </div>
              <div className="order_content">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, neque distinctio est ex quam nobis iusto ipsa sit
                  illum tempore reiciendis ev
                </p>
              </div>
              <div className="order_info">
                <div className="order_price">
                  <p>{formatPrice(6616520)}</p>
                  <p>{formatPrice(3972680)} UZS</p>
                </div>
                <div className="order_info_buttons sm:w-[180px] w-[70px] sm:py-[8px] py-[5px] sm:px-[15px] px-[10px] flex items-center justify-between text-white rounded-[15px] gap-[15px]">
                  <button className="cursor-pointer">
                    <svg
                      viewBox="0 0 19 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
                    >
                      <path
                        d="M2 2.5H17.0033"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <p className="text-white inter sm:text-lg text-sm">5</p>

                  <button className="cursor-pointer">
                    <svg
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
                    >
                      <path
                        d="M2 9.5H17.0033"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.50195 1.99805V17.0013"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="order_info_img">
                  {true ? (
                    <img src={heart} alt="" />
                  ) : (
                    <img src={fill_heart} alt="" />
                  )}
                  <img src={clear} alt="" />
                </div>
              </div>
            </div>
            <div className="order_card">
              <div className="order_img">
                <img src={exp} alt="" />
              </div>
              <div className="order_content">
                <h3>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Officia, neque distinctio est ex quam nobis iusto ipsa sit
                  illum tempore reiciendis ev
                </p>
              </div>
              <div className="order_info">
                <div className="order_price">
                  <p>{formatPrice(6616520)}</p>
                  <p>{formatPrice(3972680)} UZS</p>
                </div>
                <div className="order_info_buttons sm:w-[180px] w-[70px] sm:py-[8px] py-[5px] sm:px-[15px] px-[10px] flex items-center justify-between text-white rounded-[15px] gap-[15px]">
                  <button className="cursor-pointer">
                    <svg
                      viewBox="0 0 19 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
                    >
                      <path
                        d="M2 2.5H17.0033"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>

                  <p className="text-white inter sm:text-lg text-sm">5</p>

                  <button className="cursor-pointer">
                    <svg
                      viewBox="0 0 19 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="cursor-pointer sm:w-[12px] sm:h-[12px] w-[5px] h-[5px]"
                    >
                      <path
                        d="M2 9.5H17.0033"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9.50195 1.99805V17.0013"
                        stroke="white"
                        strokeWidth="3.18251"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div className="order_info_img">
                  {true ? (
                    <img src={heart} alt="" />
                  ) : (
                    <img src={fill_heart} alt="" />
                  )}
                  <img src={clear} alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:hidden block order_sum">
            <h2>Umumiy summa: {formatPrice(16445260)} UZS</h2>
            <p className="mb-3">
              5 mahsulot miqdori uchun:{" "}
              <span className="font-bold">{formatPrice(16445260)} UZS</span>
            </p>
            <p className="mb-3">
              Sizning chegirmangiz:{" "}
              <span className="text-red-600 font-bold">
                -{formatPrice(541452554)} UZS
              </span>
            </p>
            <div className="flex flex-col gap-3">
              <Link
                to={"/send"}
                className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
              >
                Davom etish <span aria-hidden="true">&rarr;</span>
              </Link>
              <Link
                to={"/furnitures"}
                className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
              >
                Mebellar to'plamiga qaytish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;
