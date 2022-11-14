import React from "react";
import { Link } from "react-router-dom";

function Hero_Lest() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://media.discordapp.net/attachments/819417965606207540/1040736471054815313/51193369_p0.jpg?width=414&height=662"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div className="ml-10">
            <h1 className="text-5xl font-bold">All Collection</h1>
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
