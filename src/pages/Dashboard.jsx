import React from "react";
import Cards from "../components/Cards";
import Gallery from "../components/Gallery";
import Carousel from "../components/Carousel";
import Location from "../components/Location";
import AutoSlider from "../components/AutoSlider";
import CategorySlider from "../components/CategorySlider";
import Information from "../components/Information";
import GridCategory from "../components/grid/GridCategory";

const Dashboard = () => {
  return (
    <>
      <Carousel />
      <div className="container">
        <CategorySlider />
        <GridCategory />
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
