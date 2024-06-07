import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useRef, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const New = ({ title }) => {
  const navigate = useNavigate();
  const [file, setFile] = useState("");
  const imgRef = useRef(null);
  const idRef = useRef(null);
  const discountRef = useRef(null);
  const currentRef = useRef(null);
  const descRef = useRef(null);
  const countryRef = useRef(null);
  const colorRef = useRef(null);
  const heightRef = useRef(null);
  const weightRef = useRef(null);
  const lengthRef = useRef(null);
  const nameRef = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("category_id", idRef.current.value);
    formData.append("img", imgRef.current.files[0]);
    formData.append("name", nameRef.current.value);
    formData.append("discount_price", discountRef.current.value);
    formData.append("current_price", currentRef.current.value);
    formData.append("is_saved", false);
    formData.append("is_favorite", false);
    formData.append("description", descRef.current.value);
    formData.append("country", countryRef.current.value);
    formData.append("is_modern", false);
    formData.append("color", colorRef.current.value);
    formData.append("height", heightRef.current.value);
    formData.append("weight", weightRef.current.value);
    formData.append("length", lengthRef.current.value);
    console.log(idRef.current.value);
    axiosT
      .post("/admin/createProduct", formData)
      .then((res) => {
        console.log(res.data);
        toast.info("Mahsulot yaratildi", {
          position: "top-right",
        });
        // idRef.current.value = "";
        // nameRef.current.value = "";
        // imgRef.current.value = "";
        // discountRef.current.value = "";
        // currentRef.current.value = "";
        // descRef.current.value = "";
        // countryRef.current.value = "";
        // colorRef.current.value = "";
        // heightRef.current.value = "";
        // weightRef.current.value = "";
        // lengthRef.current.value = "";
        // setFile("");
        // navigate("/admin/products");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Xatolik yuz berdi", {
          position: "top-right",
        });
      });
  };

  return (
    <div className="new1">
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
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1 className="pt-5 pl-5">{title}</h1>
        </div>
        <div className="bottom1">
          <div className="right1">
            <form onSubmit={handleAdd}>
              <div className="formInput">
                <div className="img">
                  <div className="left1">
                    <img
                      src={
                        file
                          ? URL.createObjectURL(file)
                          : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <label htmlFor="file">
                    Rasm: <DriveFolderUploadOutlinedIcon className="icon" />
                  </label>
                  <input
                    type="file"
                    id="file"
                    ref={imgRef}
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>

              <div className="formInput">
                  <label>Kategoriya ID si</label>
                  <input
                    type="text"
                    ref={idRef}
                    placeholder="id"
                  />
                </div>
              <div className="formInput">
                  <label>Mahsulot nomi</label>
                  <input
                    type="text"
                    ref={nameRef}
                    placeholder="Stol"
                  />
                </div>
              <div className="formInput">
                  <label>Chegirma narxi</label>
                  <input
                    type="number"
                    ref={discountRef}
                    placeholder="1200000"
                  />
                </div>
              <div className="formInput">
                  <label>Joriy narxi</label>
                  <input
                    type="number"
                    ref={currentRef}
                    placeholder="1100000"
                  />
                </div>
              <div className="formInput">
                  <label>Mahsulotning mamlakati</label>
                  <input
                    type="text"
                    ref={countryRef}
                    placeholder="Italiya"
                  />
                </div>
              <div className="formInput">
                  <label>Rangi</label>
                  <input
                    type="text"
                    ref={colorRef}
                    placeholder="qizil"
                  />
                </div>
              <div className="formInput">
                  <label>Balandligi</label>
                  <input
                    type="number"
                    ref={heightRef}
                    placeholder="121"
                  />
                </div>
              <div className="formInput">
                  <label>Eni</label>
                  <input
                    type="number"
                    ref={weightRef}
                    placeholder="122"
                  />
                </div>
              <div className="formInput">
                  <label>Uzunligi</label>
                  <input
                    type="number"
                    ref={lengthRef}
                    placeholder="123"
                  />
                </div>
              <div className="formInput">
                  <label>Mahsulot ta'rifi</label>
                  <input
                  type="text"
                    ref={descRef}
                    placeholder="lorem ipsum"
                  />
                </div>
              <button type="submit">
                Mahsulot qo'shish
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
