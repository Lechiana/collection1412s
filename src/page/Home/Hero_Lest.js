import React from "react";
import { Link } from "react-router-dom";

function Hero_Lest() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://sv1.picz.in.th/images/2022/11/15/GdcZ50.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-10">
            <h1 className="text-5xl font-bold">All Collection Travel</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <Link to="/Collection" className="btn btn-primary">
              See Collection
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero_Lest;
