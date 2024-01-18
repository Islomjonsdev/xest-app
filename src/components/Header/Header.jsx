import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerIcon from "../../assets/svg/headerIcon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header container">
      <div className="container">
        <div className="header__container">
          <Link href="/">
            <Image src={headerIcon} />
          </Link>

          <div className="header__list__wrapper">
            <ul>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Service</Link>
              </li>
              <li>
                <Link href="/">Blogs</Link>
              </li>
              <li>
                <Link href="/">FAQ</Link>
              </li>
            </ul>
            <button className="header__btn">Contact Me</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
