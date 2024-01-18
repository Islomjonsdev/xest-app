import Image from "next/image";
import Link from "next/link";
import React from "react";
import send from "../../assets/svg/send.svg";
import footerIcon from "../../assets/svg/headerIcon.svg";
import faceBookIcon from "../../assets/svg/faceBook.svg";
import linkDingIcon from "../../assets/svg/linkding.svg";
import instagramIcon from "../../assets/svg/instagram.svg";
import beIcon from "../../assets/svg/bee.svg";
import basketballIcon from "../../assets/svg/basketBall.svg";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <span>Have you project in mind?</span>
          <h3>Let’s Make Something Great Together!</h3>
          <Link className="footer__link" href="/">
            <p>CONTACT WITH US</p>
            <Image src={send} />
          </Link>
          <Link style={{ marginBottom: "86px" }} href="/">
            <Image src={footerIcon} />
          </Link>

          <ul>
            <li>
              <Link href="/">
                <Image src={faceBookIcon} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={linkDingIcon} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={instagramIcon} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={beIcon} />
              </Link>
            </li>
            <li>
              <Link href="/">
                <Image src={basketballIcon} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <span className="footer__span"></span>

      <div className="footer__wrapper__info">
          <p>© 2023 Ideapeel Inc. All Rights Reserved</p>
          <p>Privacy Policy   |   Terms and Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
