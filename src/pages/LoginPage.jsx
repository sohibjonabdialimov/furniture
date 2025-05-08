import React from "react";
import { Controller, useForm } from "react-hook-form";
import { Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { axiosT } from "../services/api/axios";
import { toast, ToastContainer } from "react-toastify";
const LoginPage = () => {
  const {
    control,
    getValues,
    reset: BranchReset,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const submitHandler = () => {
    const data = getValues().LOGIN;
    axiosT
      .post("/user/auth/signin", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("user_data", JSON.stringify(response.data.data));
        localStorage.setItem("user_id", JSON.stringify(response.data.data.user_id));
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email yoki parol xato", {
          position: "top-right",
        });
      });
  };
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
      <ToastContainer />
      <div className="min-h-[90dvh] px-6 lg:px-32 mx-auto">
        <h1 className="common_title">Kirish</h1>
        <Form
          layout="vertical"
          className="mb-10 sm:w-[400px] w-[100%] mx-auto"
          onSubmitCapture={(e) => {
            e.preventDefault();
            submitHandler();
          }}
        >
          <div className="grid  grid-cols-1">
            <Form.Item className="font-semibold" label="Email">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="LOGIN.email"
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
            <Form.Item className="font-semibold" label="Parol">
              <Controller
                rules={{
                  required: "Field is required",
                }}
                control={control}
                name="LOGIN.password"
                render={({ field }) => {
                  return (
                    <>
                      <Input
                        {...field}
                        type="password"
                        placeholder="********"
                        className="w-full p-3 rounded-[10px]"
                      />
                    </>
                  );
                }}
              />
            </Form.Item>
            <button
              type="submit"
              className="w-full py-[0.4rem] rounded-lg font-semibold bg-custom_blue text-white cursor-pointer transition-opacity hover:opacity-85"
            >
              Kirish
            </button>
          </div>
        </Form>
        <p className="mt-10 text-center text-sm text-gray-500">
          <Link
            to={"/register"}
            className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
          >
            Akkauntingiz yo'qmi? Ro'yxatdan o'ting
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
