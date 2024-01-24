import React from "react";
import ChooseRestau from "./Assets/choose.png";
import ClickRestau from "./Assets/click.png";
import BookRestau from "./Assets/book.png";

const Work = () => {
  const workInfoData = [
    {
      image: ChooseRestau,
      title: "Choose",
      text: "Explore and select your desired restaurant. Utilize the filter option to easily categorize restaurants based on your preferences.",
    },
    {
      image: ClickRestau,
      title: "Click",
      text: "After making your selection, explore their website or check out their social media profiles by just clicking the button.",
    },
    {
      image: BookRestau,
      title: "Book",
      text: "Wrap it up by reserving your favorite top-rated restaurant, choosing your preferred time and date hassle-free.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Feeling indecisive? Follow these 3 simple steps to effortlessly pick and reserve your favorite top-rated restaurant.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
