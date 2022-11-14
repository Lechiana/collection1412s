import React from "react";

const Card = ({ image }) => {
  return (
    <div>
      <div className="hero h-4/5 mt-14 mb-14">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg " />
        </div>
      </div>
    </div>
  );
};

export default Card;
