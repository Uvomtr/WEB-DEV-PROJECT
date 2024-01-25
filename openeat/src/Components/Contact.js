import React from "react";

const Contact = () => {
  const handleEmailSubmission = () => {
    window.location.href = "mailto:openeat@gmail.com";
  };

  return (
    <div id="contact-section">
      <div className="contact-page-wrapper">
        <h1 className="primary-heading">Have a Question In Mind?</h1>
        <h1 className="primary-heading">Let Us Help You</h1>
        <div className="contact-form-container">
          <input type="email" placeholder="openeat.it@gmail.com" />
          <button className="secondary-button" onClick={handleEmailSubmission}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;

