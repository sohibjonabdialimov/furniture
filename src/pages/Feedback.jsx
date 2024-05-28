import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../firebase";
const Feedback = () => {
  const [data, setData] = useState([]);
  const [send, setSend] = useState(false);

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: value });
  };
  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "comments"), {
        ...data,
        timeStamp: serverTimestamp(),
      });
      
      e.target[0].value = "";
      e.target[1].value = "";
      e.target[2].value = "";
      setSend(true);
      setTimeout(() => {
        setSend(false);
      }, 5000);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container">
      <form onSubmit={handleAdd} className="w-full max-w-lg mx-auto mb-[100px] px-8 sm:px-0">
        <h1 className="common_title">
          Biz haqimizda sizning fikringiz
        </h1>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-sm font-bold mb-2"
              htmlFor="grid-password"
            >
              To'liq ism sharifingiz
            </label>
            <input
            onChange={handleInput}
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
              E-mail yoki telefon raqamingiz
            </label>
            <input
            onChange={handleInput}
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
              Fikr-mulohazalaringizni shu yerga qoldiring...
            </label>
            <textarea
            onChange={handleInput}
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
              Jo'natish
            </button>
          </div>
          {send && (
            <span className="send_text">
              Sizning ma'lumotlaringiz adminga jo'natildi!
            </span>
          )}
        </div>
      </form>
    </div>
  );
};

export default Feedback;
