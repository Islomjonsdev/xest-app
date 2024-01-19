import React from "react";
import Button from "../Button/Button";
import cardImg1 from "../../assets/images/img1.png"
import cardImg2 from "../../assets/images/img2.png"
import cardImg3 from "../../assets/images/img3.png"
import "./Portfolio.scss";
import Image from "next/image";

const Portfolio = () => {
  return (
    <div className="portfolio container">
        <div className="portfolio__top">
            <div className="portfolio__top__left">
                <span>Portfolio</span>
                <p>Some Of Our Best Works </p>
            </div>
            <Button title={"Load More"}/>
        </div>

        <div className="portfolio__card">
            <Image src={cardImg1} className="portfolio__img1"/>
            <Image src={cardImg2} className="portfolio__img2"/>
            <Image src={cardImg3} className="portfolio__img3"/>
            <Image src={cardImg3} className="portfolio__img4"/>
            <Image src={cardImg2} className="portfolio__img5"/>
            <Image src={cardImg1} className="portfolio__img6"/>
            <Image src={cardImg1} className="portfolio__img7"/>
            <Image src={cardImg2} className="portfolio__img8"/>
            <Image src={cardImg3} className="portfolio__img9"/>
        </div>
        <div className="portfolio__text">
            <span>UI Design</span>
            <h5>Greenfy Website</h5>
        </div>
    </div>
  );
};

export default Portfolio;
