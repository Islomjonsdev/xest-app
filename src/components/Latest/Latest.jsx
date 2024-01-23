import React from "react";
import WhiteBtn from "../WhiteBtn/WhiteBtn";
import Image from "next/image";
import latestImg1 from "../../assets/images/latstImg1.png";
import latestImg2 from "../../assets/images/latestImg2.png";
import sendIcon from "../../assets/svg/send.svg";
import Link from "next/link";
import Button from "../Button/Button";
import "./Latest.scss";

const Latest = () => {
  return (
    <div className="latest">
      <div className="container">
        <div className="latest__top">
          <div className="latest__top__left__side">
            <span>LATEST BLOG</span>
            <h4>Check Some of Latest News & Articles</h4>
          </div>
          <WhiteBtn className="latest__top__btn" btnTitle={"Load More"}/>
        </div>
        <ul className="portfolio__list">
          <li>
            <Image className="portfolio__image" src={latestImg1} alt="" />

            <div>
              <span>UI Design | 22 May 2023</span>
              <h4>What is UI Design in Front End Design?</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

              <Link href="/">
              READ MORE
              <Image src={sendIcon}/>
              </Link>
            </div>
          </li>
          <li>
            <Image className="portfolio__image" src={latestImg2} alt="" />

            <div>
              <span>UI Design | 22 May 2023</span>
              <h4>What is UI Design in Front End Design?</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

              <Link href="/">
              READ MORE
              <Image className="letest__icon" src={sendIcon}/>
              </Link>
            </div>
          </li>
          <li>
            <Image className="portfolio__image" src={latestImg1} alt="" />

            <div>
              <span>UI Design | 22 May 2023</span>
              <h4>What is UI Design in Front End Design?</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

              <Link href="/">
              READ MORE
              <Image src={sendIcon}/>
              </Link>
            </div>
          </li>
          <li>
            <Image className="portfolio__image" src={latestImg2} alt="" />

            <div>
              <span>UI Design | 22 May 2023</span>
              <h4>What is UI Design in Front End Design?</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

              <Link href="/">
              READ MORE
              <Image src={sendIcon}/>
              </Link>
            </div>
          </li>
          <li>
            <Image className="portfolio__image" src={latestImg1} alt="" />

            <div>
              <span>UI Design | 22 May 2023</span>
              <h4>What is UI Design in Front End Design?</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

              <Link href="/">
              READ MORE
              <Image src={sendIcon}/>
              </Link>
            </div>
          </li>
          <li>
            <Image className="portfolio__image" src={latestImg2} alt="" />

            <div>
              <span>UI Design | 22 May 2023</span>
              <h4>What is UI Design in Front End Design?</h4>
              <p>But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system</p>

              <Link href="/">
              READ MORE
              <Image src={sendIcon}/>
              </Link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Latest;
