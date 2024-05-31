import React from "react";
import { formatPrice } from "../utils/formatPrise";
import heart from "../assets/heart.png";
import fill_heart from "../assets/fill_heart.png";
import clear from "../assets/delete.png";
import exp from "../assets/10.jpg";
import { Link } from "react-router-dom";

import { Controller, useForm, useFormContext } from "react-hook-form";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;
import { useNavigate } from "react-router-dom";

const info = [
  {
    id: 1,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/5-2Qh3der08wcaM4kaOckVxA73BHGErUZn6Q7jdndxA/t:0::0:0/pd:60:30:60:30/rs:fit:364:156:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzUwMTM1ODIucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 2,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/ovZGvg3Uf1rVS0NDM_qYfUN3jA4XxrA72Pfoiv-A0g8/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxOTM4OTgucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 3,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 4,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/-dAUuiUeUWVFtR3Bg8e_Lh4yEBA7D1K2Ua3Asm2HU8Q/t:0::0:0/pd:30:30:30:30/rs:fit:364:364:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5OTI1NjQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 5,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/pgqf59hBum2_fKyjsGxMKj8CYCI59ppCvHFxBZ2iCAQ/t:0::0:0/pd:60:30:60:30/rs:fit:364:156:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:95/czM6Ly9kaXZhbi9wcm9kdWN0LzUxNjU5NDYucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 6,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 7,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 8,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/LUpXV8nlt4e81PopqyLLdHTGp0ibKXVdYCh4gfLc0DQ/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQ5MTIzMzQucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
  {
    id: 9,
    name: "Floor Red Lorem",
    color: "qizil",
    description:
      "Blurb to get reader hooked. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, sit! Lorem ipsumdolor, sit amet consectetur adipisicing elit. Ducimus",
    country: "Germaniya",
    is_modern: true,
    img: "https://cdn0.divan.by/img/v1/I8DHu5sTDGU98tCmg5gZ0o5L6-_BImN6dWIg__oV04w/t:0::0:0/pd:30:30:30:30/rs:fit:364:216:0:1:ce:0:0/g:ce:0:0/bg:f5f3f1/q:85/czM6Ly9kaXZhbi9wcm9kdWN0LzQxNzA4NjIucG5n.jpg",
    discount_price: 2522255,
    current_price: 5225566,
  },
];

const Order = () => {
  const {
    control,
    getValues,
    reset: BranchReset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const submitHandler = () => {
    const data = getValues().USER;
    console.log(data);
    console.log("Hello");
  };
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
          <h3 className="font-bold text-xl">Diqqat</h3>
          <p>Tanlangan mebellarga buyurtma berish uchun pastdagi formani to'ldiring va "Jo'natish" tugmasini bosing.</p>
          <Link
            to={"/furnitures"}
            className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
          >
            Mebellar to'plamiga qaytish <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
      <div className="min-h-[90dvh] px-6 lg:px-8">
        <h1 className="common_title">Sizning savatingiz</h1>
        <div className="order_wrap">
          <div className="order_left">
            {info.map((item) => {
              return (
                <div key={item.id} className="order_card">
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
                      illum tempore reiciendis eveniet rerum omnis a quaerat
                      facere? Unde, odio aut?
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
              );
            })}
            <div className="w-full flex flex-col order_form">
              <h2 className="font-bold text-2xl mb-4">
                Quyidagi ma'lumotlarni to'ldiring
              </h2>
              <Form
                layout="vertical"
                className="mb-10 sm:w-[400px] w-[100%]"
                onSubmitCapture={(e) => {
                  e.preventDefault();
                  submitHandler();
                }}
              >
                <div className="grid  grid-cols-1">
                  <Form.Item className="font-semibold" label="Ism-familiya">
                    <Controller
                      rules={{
                        required: "Field is required",
                      }}
                      control={control}
                      name="USER.fullname"
                      render={({ field }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              placeholder="Xudoyberdiyev Eldor"
                              className="w-full p-3 rounded-[10px]"
                            />
                          </>
                        );
                      }}
                    />
                  </Form.Item>
                  <Form.Item className="font-semibold" label="Telefon raqam">
                    <Controller
                      rules={{
                        required: "Field is required",
                      }}
                      control={control}
                      name="USER.number"
                      render={({ field }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              type="number"
                              placeholder="+998976367574"
                              className="w-full p-3 rounded-[10px]"
                            />
                          </>
                        );
                      }}
                    />
                  </Form.Item>
                  <Form.Item className="font-semibold" label="Email">
                    <Controller
                      rules={{
                        required: "Field is required",
                      }}
                      control={control}
                      name="USER.email"
                      render={({ field }) => {
                        return (
                          <>
                            <Input
                              {...field}
                              type="email"
                              placeholder="xudoyberdiyeveldor@gmail.com"
                              className="w-full p-3 rounded-[10px]"
                            />
                          </>
                        );
                      }}
                    />
                  </Form.Item>
                  <Form.Item className="font-semibold" label="To'liq manzil">
                    <Controller
                      rules={{
                        required: "Field is required",
                      }}
                      control={control}
                      name="USER.location"
                      render={({ field }) => {
                        return (
                          <>
                            <TextArea
                              {...field}
                              placeholder="Toshkent shahar, Yunusobod tumani, Amir Temur ko'chasi, 102-uy"
                              className="w-full p-3 rounded-[10px]"
                            />
                          </>
                        );
                      }}
                    />
                  </Form.Item>
                  <button
                    type="submit"
                    className="w-full font-semibold bg-custom_blue cursor-pointer transition-opacity hover:opacity-85"
                  >
                    Jo'natish
                  </button>
                </div>
              </Form>
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
                Davom etish
              </Link>
              <Link
                to={"/furnitures"}
                className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
              >
                Mebellar to'plamiga qaytish{" "}
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Order;

{
  /* <div className="order_card">
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
</div> */
}
