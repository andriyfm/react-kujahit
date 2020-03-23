import React from "react";

import dummyImage from "../../assets/images/img1.jpg";

export default function HeroStatic() {
  return (
    <section className="hero">
      <img className="hero__dummy-img" src={dummyImage} alt="hero" />
    </section>
  );
}
