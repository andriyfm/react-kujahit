import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

/**
 * HERO SLIDER
 * @param {*} props
 */
export const HeroSlider = props => {
  return (
    <AutoplaySlider play={true} cancelOnInteraction={false} interval={4000}>
      <div data-src={require("../assets/images/alexander-andrews.jpg")} />
      <div data-src={require("../assets/images/edgardo.jpg")} />
      <div data-src={require("../assets/images/ilya-lix.jpg")} />
    </AutoplaySlider>
  );
};

/**
 * HERO STATIC
 * @param {*} param0
 */
export const HeroStatic = props => {
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
