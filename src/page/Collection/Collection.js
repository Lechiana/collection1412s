import React from "react";
import Hero_coll from "./Hero_coll";
import Coll_image from "./Coll_image";

function Collection() {
  return (
    <div>
      <Hero_coll />
      <Coll_image
        title="ALL IMAGEs"
        description="Provident cupiditate voluptatem et in."
      />
    </div>
  );
}

export default Collection;
