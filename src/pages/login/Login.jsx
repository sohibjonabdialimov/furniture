import { useContext, useRef } from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { axiosT } from "../../services/api/axios";
import { authContext } from "../../services/providers/authContext";
import { ToastContainer, toast } from "react-toastify";

const Login = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const { setAuth } = useContext(authContext);
  const navigate = useNavigate();
  const handleLogin = (e) => {
    e.preventDefault();
    let data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    axiosT
      .post("/admin/auth/signin", data)
      .then((response) => {
        console.log(response);
        localStorage.setItem("admin", JSON.stringify(response.data.data));
        setAuth(JSON.stringify(response.data.data));
        navigate("/admin");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Email yoki parol xato", {
          position: "top-right",
        });
      });
  };
  return (
    <>
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
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 lg:px-8 sm:w-[400px] w-auto mx-auto h-[100dvh]">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Kirish
          </h2>
        </div>

        <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-start text-sm font-medium leading-6 text-gray-900 px-3"
              >
                Email kiriting
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  ref={emailRef}
                  type="email"
                  autoComplete="email"
                  required
                  className="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900 px-3"
              >
                Parol kiriting
              </label>
              <div className="mt-2">
                <input
                  id="password"
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="px-2 block w-full rounded-md border py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Kirish
              </button>
            </div>
          </form>
          <p className="mt-10 text-center text-sm text-gray-500">
            <Link
              to={"/"}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 border px-5 py-3 rounded"
            >
              Bosh sahifaga o'tish
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
