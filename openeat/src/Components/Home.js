import React from "react";
import BannerBackground from "./Assets/home-bg.png";
import BannerImage from "./Assets/home-banner.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div id="home-section">
      <div className="home-container">
        <Navbar />
        <div className="home-banner-container">
          <div className="home-bannerImage-container">
            <img src={BannerBackground} alt="" />
          </div>
          <div className="home-text-section">
            <h1 className="primary-heading">
            Top-Rated Eats, Exceptional Treats!
            </h1>
            <p className="primary-text">
              Elevate your dining adventures by exploring a tailored selection
              that aligns seamlessly with your palate.
            </p>
            <a href="#Restaurant-section" className="secondary-button">
              Browse <FiArrowRight />
            </a>
          </div>
          <div className="home-image-section">
            <img src={BannerImage} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
