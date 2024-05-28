import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-slate-800 font-sans px-8 sm:px-24">
        <div className="container px-32 py-12">
          <div className="grid grid-cols-1 gap-6 justify-between sm:grid-cols-2 w-100 sm:gap-y-10 lg:grid-cols-12">
            <div className="sm:col-span-4">
              <h1 className="max-w-lg text-xl font-semibold tracking-tight text-white xl:text-2xl">
                Pochta ro'yxatiga obuna bo'ling.
              </h1>

              <div className="flex flex-col mx-auto sm:mx-0 mt-6 space-y-3 md:space-y-0 md:flex-row justify-between sm:w-[100%]">
                <input
                  id="email"
                  type="text"
                  className="flex-1 px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-white focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                  placeholder="E-mail"
                />

                <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none rounded-lg bg-gray-600 hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                  Obuna bo'lish
                </button>
              </div>
            </div>

            <div className="sm:col-span-2">
              <p className="font-semibold text-white">
                Sayt havolalari
              </p>

              <div className="flex flex-col items-start mt-2 space-y-2">
                <Link
                  to={"/"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Bosh sahifa
                </Link>
                <Link
                  to={"/furnitures"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Mebellar
                </Link>
                <Link
                  to={"/contact"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Aloqa
                </Link>
                <Link
                  to={"/contact"}
                  className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500"
                >
                  Fikr-mulohazalar
                </Link>
              </div>
            </div>

            <div className="sm:col-span-3">
              <div>
                <p className="font-semibold text-white dark:text-white">
                  Ish vaqti / Ish tartibi
                </p>
                <p className="mt-2 text-white transition-colors duration-300 dark:text-gray-300 leading-[1.8rem]">
                  Ish vaqti har kuni soat 08:00 dan 22:00 gacha. Yetkazib berish
                  seshanba, payshanba va shanba kunlari
                </p>
              </div>
            </div>
            <div className="sm:col-span-3">
              <p className="font-semibold text-white dark:text-white">
                Aloqa uchun
              </p>

              <div className="flex flex-col items-start mt-2 space-y-2">
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  +998 (91) 474-78-18
                </p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  mebellar@gmail.com
                </p>
                <p className="text-white transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:cursor-pointer hover:text-blue-500">
                  t.me/mebellar_uz
                </p>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700 h-2" />

          <div className="sm:flex sm:items-center sm:justify-between">
            <div className="flex flex-1 gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303139/google-play-badge-logo.svg"
                width="130"
                height="110"
                alt=""
              />
              <img
                src="https://www.svgrepo.com/show/303128/download-on-the-app-store-apple-logo.svg"
                width="130"
                height="110"
                alt=""
              />
            </div>

            <div className="flex gap-4 hover:cursor-pointer">
              <img
                src="https://www.svgrepo.com/show/303114/facebook-3-logo.svg"
                width="30"
                height="30"
                alt="fb"
              />
              <img
                src="https://www.svgrepo.com/show/303115/twitter-3-logo.svg"
                width="30"
                height="30"
                alt="tw"
              />
              <img
                src="https://www.svgrepo.com/show/303145/instagram-2-1-logo.svg"
                width="30"
                height="30"
                alt="inst"
              />
              {/* <img
                src="https://www.svgrepo.com/show/94698/github.svg"
                className=""
                width="30"
                height="30"
                alt="gt"
              /> */}
              {/* <img
                src="https://www.svgrepo.com/show/22037/path.svg"
                width="30"
                height="30"
                alt="pn"
              /> */}
              {/* <img
                src="https://www.svgrepo.com/show/28145/linkedin.svg"
                width="30"
                height="30"
                alt="in"
              /> */}
              {/* <img
                src="https://www.svgrepo.com/show/22048/dribbble.svg"
                className=""
                width="30"
                height="30"
                alt="db"
              /> */}
            </div>
          </div>
          <p className="font-sans p-8 text-start md:text-center md:text-lg md:p-4 opacity-60 text-white">
            {new Date().getFullYear()}-yil. Sayt mualliflik huquqi bilan
            himoyalangan.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
