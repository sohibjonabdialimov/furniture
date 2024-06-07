import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useRef, useState } from "react";
import { axiosT } from "../../services/api/axios";
import { ToastContainer, toast } from "react-toastify";

const NewCategory = ({ title }) => {
  const [file, setFile] = useState("");
  const imgRef = useRef(null);
  const nameRef = useRef(null);

  const handleAdd = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("categoryName", nameRef.current.value);
    formData.append("categoryImage", imgRef.current.files[0]);
    formData.append("productCount", 0);
    console.log(formData);
    axiosT
      .post("/admin/createCategory", formData)
      .then((res) => {
        console.log(res.data);
        toast.info("Kategoriya yaratildi", {
          position: "top-right",
        });
        nameRef.current.value = "";
        setFile("");
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
                    ref={imgRef}
                    id="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    style={{ display: "none" }}
                  />
                </div>
              </div>
              <div className="formInput">
                <label>Kategoriya nomi</label>
                <input
                  type="text"
                  placeholder="Yumshoq mebellar"
                  ref={nameRef}
                />
              </div>
              <button type="submit">Kategoriya yaratish</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
