import React from "react";

const Card = ({ image }) => {
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl ml-10 mt-10 mb-10">
        <figure className="h-96">
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body bg-base-100">
          <h2 className="card-title">
            วัดพระแก้ว&nbsp;
            <div className="badge badge-secondary">Top Travel</div>
          </h2>
          <p>
            วัดพระแก้ว หรือ วัดพระศรีรัตนศาสดาราม
            เป็นวัดหลวงที่สำคัญในพระราชพิธีต่างๆ
            ที่สร้างขึ้นในพร้อมกับการสถาปนากรุงรัตนโกสินทร์
          </p>
        </div>
      </div>

      {/* <div className="hero h-4/5 mt-14 mb-14">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg " />
        </div>
      </div> */}
    </div>
  );
};

export default Card;
