import React from "react";
import ProfilePic1 from "./Profile/Araneta.png";
import ProfilePic2 from "./Profile/Espanillo.png";
import ProfilePic3 from "./Profile/Galicia.png";
import ProfilePic4 from "./Profile/Yaba.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testimonial-section">
      <div id="testimonial-section">
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <p className="primary-subheading">Profiles</p>
            <h1 className="primary-heading">Team Profiles</h1>
            <p className="primary-text">
              Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et
              elit. Dolor turpis molestie dui magnis facilisis at fringilla
              quam.
            </p>
          </div>

          <div className="testimonial-section">
            {/* Testimonial 1 */}
            <div className="testimonial-card">
              <img src={ProfilePic1} alt="John Doe" />
              <p>
                "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non
                et elit. Dolor turpis molestie dui magnis facilisis at fringilla
                quam."
              </p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Ryan Joshua T. Araneta</h2>
              <h2>BSIT-NS 3A</h2>
            </div>

            {/* Testimonial 2 */}
            <div className="testimonial-card">
              <img src={ProfilePic2} alt="Jane Doe" />
              <p>
                "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non
                et elit. Dolor turpis molestie dui magnis facilisis at fringilla
                quam."
              </p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Kristel Mae G. Espanillo</h2>
              <h2>BSIT-NS 3A</h2>
            </div>

            {/* Testimonial 3 */}
            <div className="testimonial-card">
              <img src={ProfilePic3} alt="Bob Doe" />
              <p>
                "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non
                et elit. Dolor turpis molestie dui magnis facilisis at fringilla
                quam."
              </p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Christine Joy P. Galicia</h2>
              <h2>BSIT-NS 3A</h2>
            </div>

            {/* Testimonial 4 */}
            <div className="testimonial-card">
              <img src={ProfilePic4} alt="Mary Doe" />
              <p>
                "Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non
                et elit. Dolor turpis molestie dui magnis facilisis at fringilla
                quam."
              </p>
              <div className="testimonials-stars-container">
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
              </div>
              <h2>Aliah Mhae F. Yaba</h2>
              <h2>BSIT-NS 3A</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
