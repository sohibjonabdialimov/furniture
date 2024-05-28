import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import Banner from "../components/ui/Banner";
import ScrollToTop from "../components/ui/Scroll";

const UsersLayout = () => {
  return (
    <>
      <Banner />
      <Header />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default UsersLayout;
