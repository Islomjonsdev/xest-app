import Image from "next/image";
import Link from "next/link";
import React from "react";
import headerIcon from "../../assets/svg/headerIcon.svg";
import "./Header.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <div>
            <Link href="/">
              <Image src={headerIcon} />
            </Link>
          </div>

          <nav className="header__list__wrapper">
            <ul>
              <li>
                <Link href="/admin">About</Link>
              </li>
              <li>
                <Link href="/service">Service</Link>
              </li>
              <li>
                <Link href="/admin/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/faq">FAQ</Link>
              </li>
            </ul>
            <button className="header__btn">Contact Me</button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
