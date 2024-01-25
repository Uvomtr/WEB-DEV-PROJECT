import React from "react";
import ProfilePic1 from "./Reviews/Profile_1.png";
import ProfilePic2 from "./Reviews/Profile_2.png";
import ProfilePic3 from "./Reviews/Profile_3.png";
import ProfilePic4 from "./Reviews/Profile_4.png";
import { AiFillStar } from "react-icons/ai";

const Review = () => {
  return (
    <div id="review-section">
      <div id="review-section">
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <p className="primary-subheading">Review Hub</p>
            <h1 className="primary-heading">What are they saying?</h1>
            <p className="primary-text">
              Welcome to our review hub, where real opinions meet real
              experiences. You're at the core of our community, and your thoughts truly matter.
            </p>
          </div>

          <div className="review-section">
            {/* Review 1 */}
            <div className="review-card">
              <img src={ProfilePic1} alt="John Doe" />
              <h3>Hapag</h3>
              <p>
                "Hapag is a must-try when in Manila. Make reservations and
                prepare for a feast. Expect 10+ servings of traditional Filipino
                dishes reimagined with a modern twist. I look forward to
                visiting again when we return."
              </p>
              <div className="reviews-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Danny Gamboa</h2>
            </div>

            {/* Review 2 */}
            <div className="review-card">
              <img src={ProfilePic2} alt="Jane Doe" />
              <h3>A Mano</h3>
              <p>"I really liked the food here at A mano !</p>
              <p>
                They served freshly baked pizza and the dessert panna cota was
                just to die for. I highly recommend this restaurant to all those
                likes pizza or italian food."
              </p>
              <div className="reviews-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Elle Rolf</h2>
            </div>

            {/* Review 3 */}
            <div className="review-card">
              <img src={ProfilePic3} alt="Bob Doe" />
              <h3>Gallery by Chele</h3>
              <p>
                "We had an impeccable 10 course. The every dish was a top dish
                from the past 10 years. Chele is worth a visit to everyone
                celebrating an occasion, visitors of Manila must check this
                venture into the Philippines cuisine."
              </p>
              <div className="reviews-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Christoph Garcia</h2>
            </div>

            {/* Review 4 */}
            <div className="review-card">
              <img src={ProfilePic4} alt="Mary Doe" />
              <h3>Antonio's</h3>
              <p>
                "We had a great lunch at Antonio’s- the atmosphere and vibes are
                exceptional , the food and the service was superlative. Their
                lamb was soft and juicy; the burrata was delightful and the
                crepes suzette was really a special treat."
              </p>
              <div className="reviews-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Tesa Agcaoili</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
