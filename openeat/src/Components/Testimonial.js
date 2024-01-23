import React from "react";
import ProfilePic1 from "./Assets/john-doe-image.png";
import ProfilePic2 from "./Assets/john-doe-image.png";
import ProfilePic3 from "./Assets/john-doe-image.png";
import ProfilePic4 from "./Assets/john-doe-image.png";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div id="testimonial-section">
      <div id="testimonial-section">
        <div className="work-section-wrapper">
          <div className="work-section-top">
            <p className="primary-subheading">Testimonials</p>
            <h1 className="primary-heading">What They Are Saying</h1>
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
              <h2>Ryan Araneta</h2>
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
              <h2>Kristel Mae Espanillo</h2>
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
              <h2>Christine Joy Galicia</h2>
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
