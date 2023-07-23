//Styles
import "./HeroSection.css";
//Components
import Counter from "./Counter/Counter";
//Hooks
import React, { useEffect, useState } from "react";
//Images
import WhiteShadow from "./images/white-shadow.png";
import LondonHome2 from "./images/london-home-2.jpg";

const HeroSection = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="hero-container ">
      <div className="container hero-width">
        <img className="white-shadow" src={WhiteShadow} />
        <div className="row hero-inner-container">
          <div
            className={`col-md-7 hero-section__left ${
              animate ? "slide-in-left" : ""
            }`}
          >
            <div className="hero-left__h1-container">
              <h1 className="hero-left__h1">
                Discover <br /> Properties in <br /> London
              </h1>
              <div className="hero-left__circle"></div>
            </div>
            <p className="hero-left__p">
              Find the best properties in London <br /> that meet your needs and
              budget.
            </p>
            <div className="number-transition-container">
              <Counter
                startingNumber={8300}
                endingNumber={9000}
                numberLabel="Homes Rented"
              />
              <Counter
                startingNumber={1200}
                endingNumber={1600}
                numberLabel="Available Rentals"
              />
              <Counter
                startingNumber={6}
                endingNumber={22}
                numberLabel="Awards Won"
              />
            </div>
          </div>
          <div
            className={`col-md-5 hero-section__right ${
              animate ? "animate" : ""
            }`}
          >
            <img
              className="hero-right__img-one"
              src={LondonHome2}
              alt="Hero Right Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
