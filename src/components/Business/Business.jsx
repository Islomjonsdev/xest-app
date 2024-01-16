import Image from "next/image";
import React from "react";
import CardsImg1 from "../../assets/images/image1.png";
import CardsImg2 from "../../assets/images/image2.png";
import CardsImg3 from "../../assets/images/image3.png";
import CardsImg4 from "../../assets/images/image4.png";
import "./Business.scss";

const Business = () => {
  return (
    <div className="business container">
      <div className="business__wrapper">
        <div className="business__left__side">
          <span>FEATURES</span>
          <h3>Giving Your Business Some Great Ideas</h3>
          <p>
            Every designer needs the right tools to do the perfect job.
            Thankfully, we can do that. I design products that are more than
            pretty. I make them shippable and usable.
          </p>
        </div>

        <ul className="business__right__side">
          <li>
            <Image src={CardsImg1} />
            <h4>UX Experience</h4>
            <p>
              I design products that are more than pretty. I make them usable.
            </p>
          </li>
          <li>
            <Image src={CardsImg2} />
            <h4>UI Design</h4>
            <p>
              I design products that are more than pretty. I make them usable.
            </p>
          </li>
          <li>
            <Image src={CardsImg3} />
            <h4>Product Analysis</h4>
            <p>
              I design products that are more than pretty. I make them usable.
            </p>
          </li>
          <li>
            <Image src={CardsImg4} />
            <h4>Product Design</h4>
            <p>
              I design products that are more than pretty. I make them usable.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Business;
