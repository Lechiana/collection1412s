import React from "react";
import Hero from "./Hero";
import Hero_Lest from "./Hero_Lest";
import Section from "./Section";

function Home() {
  return (
    <div>
      <Hero />
      <Section
        title="SO CUTE"
        description="Provident cupiditate voluptatem et in."
      />
      <Hero_Lest />
    </div>
  );
}

export default Home;
