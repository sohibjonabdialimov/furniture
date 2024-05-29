import i1 from "../assets/i1.jpg";
import i2 from "../assets/i2.jpg";
import i3 from "../assets/i3.jpg";
import i4 from "../assets/i4.jpg";
import i5 from "../assets/i5.jpg";
import i6 from "../assets/i6.jpg";
import i7 from "../assets/i7.jpg";
import i8 from "../assets/i8.jpg";
import i9 from "../assets/i9.jpg";
import i10 from "../assets/i10.jpg";
import i11 from "../assets/i11.jpg";
import i12 from "../assets/i12.jpg";
import i13 from "../assets/i13.jpg";
import i14 from "../assets/i14.jpg";
import i15 from "../assets/i15.jpg";
import i16 from "../assets/i16.jpg";
import i17 from "../assets/i17.jpg";
import { useRef } from "react";

const Design = () => {
  const modal = useRef(null);
  const modalImg = useRef(null);
  const captionText = useRef(null);
  function onOpen(e) {
    modal.current.style.display = "flex";
    modalImg.current.src = e.target.src;
    captionText.current.innerHTML = e.target.alt;
  }
  function closeFunc() {
    modal.current.style.display = "none";
  }
  return (
    <div className="container">
      <div className="min-h-[90dvh] px-6 lg:px-24">
        <h1 className="common_title">Uy uchun dizaynlar</h1>

        <div className="design_wrapper">
          <div className="d1">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i1}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d2">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i2}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d3">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i3}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d4">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i4}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d5">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i5}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d6">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i6}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d7">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i7}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d8">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i8}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d9">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i9}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d10">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i10}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d11">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i11}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d12">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i12}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d13">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i13}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d14">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i14}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d15">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i15}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d16">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i16}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>
          <div className="d17 sm:block hidden">
            <img
              onClick={(e) => onOpen(e)}
              className="w-[200px] h-[200px] myImg"
              src={i17}
              id="myImg"
              alt="Uyingiz uchun dizayn tanlang"
            />
            <div ref={modal} id="myModal" className="modal">
              <span onClick={() => closeFunc()} className="close">
                &times;
              </span>
              <img ref={modalImg} className="modal-content" id="img01" />
              <div ref={captionText} id="caption"></div>
            </div>
          </div>

          {/* <img className="d1" src={i1} alt="" /> */}
          {/* <img className="d2" src={i2} alt="" />
          <img className="d3" src={i3} alt="" />
          <img className="d4" src={i4} alt="" />
          <img className="d5" src={i5} alt="" />
          <img className="d6" src={i6} alt="" />
          <img className="d7" src={i7} alt="" />
          <img className="d8" src={i8} alt="" />
          <img className="d9" src={i9} alt="" />
          <img className="d10" src={i10} alt="" />
          <img className="d11" src={i11} alt="" />
          <img className="d12" src={i12} alt="" />
          <img className="d13" src={i13} alt="" />
          <img className="d14" src={i14} alt="" /> */}
          {/* <img className="d15" src={i15} alt="" />
          <img className="d16" src={i16} alt="" />
          <img className="d17 sm:block hidden" src={i17} alt="" /> */}
        </div>
      </div>
    </div>
  );
};

export default Design;
