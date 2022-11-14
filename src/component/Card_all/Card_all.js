import React from "react";

const Card_all = ({ image }) => {
  return (
    <div>
      <div className="hero h-4/5 mb-16">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default Card_all;
