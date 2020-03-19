import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <img
        className="hero__dummy-img"
        src={require("../assets/images/img1.jpg")}
        alt="hero"
      />
    </section>
  );
};

export default Hero;
