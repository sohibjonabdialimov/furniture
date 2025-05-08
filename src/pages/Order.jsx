import React, { useContext } from "react";
import { formatPrice } from "../utils/formatPrise";
import heart from "../assets/heart.png";
import fill_heart from "../assets/fill_heart.png";
import clear from "../assets/delete.png";
import exp from "../assets/10.jpg";
import { Link } from "react-router-dom";

import { Controller, useForm } from "react-hook-form";
import { Button, Form, Input } from "antd";
const { TextArea } = Input;
import { useNavigate } from "react-router-dom";
import { myOrderContext } from "../services/providers/orderContext";
import { ToastContainer, toast } from "react-toastify";
import { axiosT } from "../services/api/axios";

const Order = () => {
  const {
    control,
    getValues,
    reset: BranchReset,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { myOrder, setMyOrder } = useContext(myOrderContext);

  function current_price() {
    const sumWithInitial = myOrder.reduce(
      (accumulator, currentValue) => accumulator + currentValue.current_price,
      0
    );
    return sumWithInitial;
  }
  function discount_price() {
    const sumWithInitial = myOrder.reduce(
      (accumulator, currentValue) => accumulator + currentValue.discount_price,
      0
    );
    return sumWithInitial - current_price();
  }

  function orderFunc() {
    let data = {
      user_id: JSON.parse(localStorage.getItem("user_id")),
      total_amount: current_price(),
      items: [...myOrder],
    };
    axiosT
      .post("/user/createOrder", data)
      .then((response) => {
        console.log(response);
        toast.info("Buyurtmangiz qabul qilindi", {
          position: "top-right",
        });
        setMyOrder([]);
        // navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Buyurtmada xatolik yuz berdi", {
          position: "top-right",
        });
      });
    console.log(data);
  }
  function deleteItem(id) {
    let myOrder2 = myOrder.filter((item) => item.uuid !== id);
    console.log(myOrder2);
    localStorage.setItem("order", JSON.stringify(myOrder2));
    setMyOrder(myOrder2);
  }
  // function removeCount(id) {
  //   myOrder.forEach((item) => {
  //     if (item.uuid == id) {
  //       item.count -= 1;
  //     }
  //   });
  //   localStorage.setItem("order", JSON.stringify(myOrder));
  //   setMyOrder(JSON.parse(localStorage.getItem("order")));
  // }

  // function addCount(id) {
  //   let index = myOrder.findIndex((item) => item.uuid == id);
  //   console.log(index);

  //   myOrder[index].count += 1;
  //   localStorage.setItem("order", JSON.stringify(myOrder));
  //   // setMyOrder((prev) => [...prev, data]);
  //   window.refresh();
  //   setMyOrder(myOrder);
  //   console.log(myOrder);
  // }

  return (
    <div className="container">
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
      {myOrder.length && (
        <div className="hidden sm:block order_right">
          <h2>Umumiy summa: {formatPrice(current_price())} UZS</h2>
          <p className="mb-3">
            5 mahsulotlar miqdori uchun:{" "}
            <span className="font-bold">
              {formatPrice(current_price())} сум
            </span>
          </p>
          <p className="mb-3">
            Sizning chegirmangiz:{" "}
            <span className="text-red-600 font-bold">
              -{formatPrice(discount_price())} сум
            </span>
          </p>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold text-xl">Diqqat</h3>
            <p>
              Diqqat buyurtma berganingizdan so'ng admin siz bilan bog'lanadi.
            </p>
            <button
              onClick={() => {
                orderFunc();
              }}
              className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
            >
              Buyurtma berish <span aria-hidden="true">&rarr;</span>
            </button>
          </div>
        </div>
      )}

      <div className="min-h-[90dvh] px-6 lg:px-8">
        <h1 className="common_title">Sizning savatingiz</h1>
        <div className="order_wrap">
          <div className="order_left">
            {myOrder.map((item) => {
              return (
                <div key={item.uuid} className="order_card">
                  <div className="order_img">
                    <img src={item.img} alt="" />
                  </div>
                  <div className="order_content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div className="order_info">
                    <div className="order_price">
                      <p>{formatPrice(item.discount_price)}</p>
                      <p>{formatPrice(item.current_price)} UZS</p>
                    </div>
                    {/* <div className="order_info_buttons sm:w-[180px] w-[70px] sm:py-[8px] py-[5px] sm:px-[15px] px-[10px] flex items-center justify-between text-white rounded-[15px] gap-[15px]">
                      <button
                        onClick={() => removeCount(item.uuid)}
                        className="cursor-pointer"
                      >
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

                      <p className="text-white inter sm:text-lg text-sm">
                        {item.count}
                      </p>

                      <button
                        onClick={() => addCount(item.uuid)}
                        className="cursor-pointer"
                      >
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
                    </div> */}
                    <div
                      onClick={() => deleteItem(item.uuid)}
                      className="order_info_img"
                    >
                      <img src={clear} alt="" />
                    </div>
                  </div>
                </div>
              );
            })}
            {/* <div className="w-full flex flex-col order_form">
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
            </div> */}
          </div>

          {myOrder.length && (
            <div className="sm:hidden block order_sum">
              <h2>Umumiy summa: {formatPrice(current_price())} UZS</h2>
              <p className="mb-3">
                5 mahsulot miqdori uchun:{" "}
                <span className="font-bold">
                  {formatPrice(current_price())} UZS
                </span>
              </p>
              <p className="mb-3">
                Sizning chegirmangiz:{" "}
                <span className="text-red-600 font-bold">
                  -{formatPrice(discount_price())} UZS
                </span>
              </p>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-xl">Diqqat</h3>
                <p>
                  Diqqat buyurtma berganingizdan so'ng admin siz bilan
                  bog'lanadi.
                </p>
                <button
                  onClick={() => {
                    orderFunc();
                  }}
                  className="text-base font-semibold leading-6 hover:bg-slate-600 transition-colors bg-[#1F2937] text-white py-2 px-5 rounded-2xl text-center"
                >
                  Buyurtma berish <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </div>
          )}
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
