import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import ProductList from "./pages/productList/ProductList";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { productInputs } from "./formSource";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import UsersLayout from "./layouts/UserLayout";
import Dashboard from "./pages/Dashboard";
import Furniture from "./pages/Furniture";
import Design from "./pages/Design";
import Messages from "./pages/Messages";
import Installment from "./pages/installment/Installment";
import Feedback from "./pages/Feedback";
import Contact from "./pages/contact/Contact";
import Order from "./pages/Order";
import Saved from "./pages/Saved";
import "./App.css";
import "./style/dark.scss";
import OneFurniture from "./pages/oneFurniture/OneFurniture";
import MainCategory from "./pages/MainCategory";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NewCategory from "./pages/newCategory/NewCategory";
import CategoryList from "./pages/categoryList/CategoryList";
import AdminRegisterPage from "./pages/AdminRegisterPage";
import { authContext } from "./services/providers/authContext";
import AdminOrder from "./pages/AdminOrder";

function App() {
  const { darkMode } = useContext(DarkModeContext);
  const { auth } = useContext(authContext);
  const RequireAuth = ({ children }) => {
    return auth ? children : <Navigate to="/admin/login" />;
  };
  console.log(import.meta.env.VITE_FIREBASE_KEY);
  return (
    <>
      <div className={darkMode ? "app dark" : "app"}>
        <BrowserRouter>
          <Routes>
            <Route path="register" element={<RegisterPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="/" element={<UsersLayout />}>
              <Route index element={<Dashboard />} />
              <Route path="design" element={<Design />} />
              <Route path="order" element={<Order />} />
              <Route path="saved" element={<Saved />} />
              <Route path="furnitures/:id" element={<OneFurniture />} />
              <Route path="contact" element={<Contact />} />
              <Route path="feedback" element={<Feedback />} />
              <Route path="category" element={<MainCategory />} />
              <Route path="category/:id" element={<Furniture />} />
              <Route path="installment" element={<Installment />} />
            </Route>
            <Route path="/admin">
              <Route path="login" element={<Login />} />
              <Route
                index
                element={
                  <RequireAuth>
                    <Home />
                  </RequireAuth>
                }
              />
              <Route
                path="messages"
                element={
                  <RequireAuth>
                    <Messages />
                  </RequireAuth>
                }
              />
              <Route
                path="all_orders"
                element={
                  <RequireAuth>
                    <AdminOrder />
                  </RequireAuth>
                }
              />
              <Route path="users">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <List />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":userId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="add"
                  element={
                    <RequireAuth>
                      <AdminRegisterPage />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="products">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <ProductList />
                    </RequireAuth>
                  }
                />
                <Route
                  path=":productId"
                  element={
                    <RequireAuth>
                      <Single />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <New
                        inputs={productInputs}
                        title="Yangi mahsulot qo'shish"
                      />
                    </RequireAuth>
                  }
                />
              </Route>
              <Route path="categories">
                <Route
                  index
                  element={
                    <RequireAuth>
                      <CategoryList />
                    </RequireAuth>
                  }
                />
                <Route
                  path="new"
                  element={
                    <RequireAuth>
                      <NewCategory title="Yangi kategoriya qo'shish" />
                    </RequireAuth>
                  }
                />
              </Route>
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
