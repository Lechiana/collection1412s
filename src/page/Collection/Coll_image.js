import React from "react";
import Card from "../../component/Card_all/Card_all";

const Coll_image = ({ title, description }) => {
  const renderCard = () => {
    return [...new Array(16)].map((el, index) => (
      <Card
        key={index}
        image="https://cdn.discordapp.com/attachments/819417965606207540/901810666044809296/90518310_p5.jpg"
      />
    ));
  };

  return (
    <div className="mx-auto md:px-0 px-3.5 mt-10">
      <h1 className="mb-4 ml-10 text-4xl font-bold">{title}</h1>
      <p className="mb-8 ml-10">{description}</p>
      <div className="grid xl:grid-cols-4 md:grid-cols-2 ">{renderCard()}</div>
    </div>
  );
};

export default Coll_image;
