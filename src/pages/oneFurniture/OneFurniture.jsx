import React from "react";
import img from "../../assets/c12.jpg";
import "./style.css";
import { formatPrice } from "../../utils/formatPrise";

const OneFurniture = () => {
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-32 pb-32 mx-auto">
        <h1 className="common_title">МОДУЛЬНАЯ СПАЛЬНЯ ВИЛЛА</h1>
        <div className="one_wrap">
          <div className="one_content">
            <div className="one_desc">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
                quas ducimus officiis. Quasi aperiam similique tenetur
                recusandae perferendis saepe modi ducimus? Veniam nisi explicabo
                dolorem illum iusto, dolor eum consequatur necessitatibus
                ratione architecto, blanditiis ipsa obcaecati ut inventore nobis
                quasi eos? Ea culpa quisquam quam at rerum quibusdam in
                praesentium.
              </p>
              <hr />
              <div className="one_prise">
                <p>{formatPrice(6219080)} UZS</p>
                <p>{formatPrice(6219080)}</p>
                <p>-29%</p>
              </div>
              <hr />
              <div className="one_feature">
                <h3>Xususiyatlari</h3>
                <div>
                  <h4>O'lchamlari: </h4>
                  <p>
                    Uzunligi: {246} sm, Kengligi: {256} sm, Balandligi: {1456}{" "}
                    sm
                  </p>
                </div>
                <div>
                  <h4>
                    Rangi: <span>Qizil</span>
                  </h4>
                </div>
                <div>
                  <h4>
                    Ishlab chiqarilgan mamlakati: <span>Italiya</span>
                  </h4>
                </div>
              </div>
              <button>
                {true ? "Savatga qo'shish" : "Savatga qo'shilgan"}
              </button>
            </div>
            <div className="one_img">
              <img src={img} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OneFurniture;
