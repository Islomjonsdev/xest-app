import Image from "next/image";
import React from "react";
import Girl from "../../assets/images/girl.png";
import Button from "../Button/Button";
import "./Hero.scss";

const Hero = () => {
  return (
    <section className="hero container">
      <div className="hero__text">
        <div className="hero__left__side">
          <h2 className="hero__heading">Miami</h2>
          <h2 className="hero__heading1">
            Walke<span style={{ color: "#fff" }}>r</span>
          </h2>
          <p>
            Award Wining product designer based in Georgia. We create
            user-friendly interfaces for fast-growing startups.
          </p>
          {Button && (
            <button>Book A Call</button>
          )}
        </div>
        <div className="hero__right__side">
          <Image src={Girl}/>
        </div>
      </div>
    </section>
  );
};

export default Hero;
