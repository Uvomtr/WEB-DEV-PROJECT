import React from "react";
import AboutBackground from "./Assets/about-bg.png";
import AboutBackgroundImage from "./Assets/about-banner.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  const youtubeVideoId = "yl5CXDB7mzs";
  const youtubeVideoUrl = `https://www.youtube.com/watch?v=${youtubeVideoId}`;

  return (
    <div id="about-section">
      <div id="about-section">
        <div className="about-section-container">
          <div className="about-background-image-container">
            <img src={AboutBackground} alt="" />
          </div>
          <div className="about-section-image-container">
            <img src={AboutBackgroundImage} alt="" />
          </div>
          <div className="about-section-text-container">
            <p className="primary-subheading">About</p>
            <h1 className="primary-heading">
              Food Is An Important Part Of A Balanced Diet
            </h1>
            <p className="primary-text">
              A go-to website for finding the best local food options. Upon
              opening the website, not only do you encounter a curated selection
              of top-rated restaurants, but you also have the ability to
              customize your preferences.
            </p>
            <p className="primary-text">
            Easily refine your search using filters, including specific restaurant types like Asian, European, and International, ensuring recommendations match your taste preferences perfectly.mendations
              align perfectly with your culinary preferences.
            </p>
            <div className="about-buttons-container">
              <button className="secondary-button">Learn More</button>
              <a
                href={youtubeVideoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="watch-video-button"
              >
                <BsFillPlayCircleFill /> Watch Video
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
