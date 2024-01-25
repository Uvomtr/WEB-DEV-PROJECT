// Visit.js
import React from "react";
const Visit = ({ item, visit, link }) => {
  const handleVisit = (url) => {
    window.open(URL, "_blank");
  };

  return (
    <div>
      <button onClick={() => handleVisit(item.websiteLink)}>
        Visit this Restau!
      </button>
    </div>
  );
};

export default Visit;
