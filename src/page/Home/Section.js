import React from "react";
import Card from "../../component/Card/Card";

const Section = ({ title, description }) => {
  const renderCard = () => {
    return [...new Array(4)].map((el, index) => (
      <Card
        key={index}
        image="https://sv1.picz.in.th/images/2022/11/15/GdZ1rQ.jpg"
      />
    ));
  };

  return (
    <div className="mx-auto mb-20 md:px-0 px-3.5">
      <h1 className="mb-4 mt-28 ml-10 text-4xl font-bold">{title}</h1>
      <p className="mb-8 ml-10">{description}</p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 ">{renderCard()}</div>
    </div>
  );
};

export default Section;
