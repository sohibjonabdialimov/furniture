import React from "react";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Location from "../components/Location";
import AutoSlider from "../components/AutoSlider";
import CategorySlider from "../components/CategorySlider";
import Information from "../components/Information";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <CategorySlider />
        <Cards />
        <Gallery />
        <Information />
        <AutoSlider />
        <Location />
      </div>
    </>
  );
};

export default Dashboard;
