"use client";
import Image from "next/image";
import React from "react";
import imgIcon1 from "../../assets/svg/quote-up.svg";
import profileImg1 from "../../assets/images/profileImg.png";
import profileImg2 from "../../assets/images/profileImg2.png";
import starIcon from "../../assets/svg/star.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "./Custormer.scss";
import "swiper/css";
import "swiper/css/scrollbar";

const Custormer = () => {
  // const obj = [
  //   {
  //     desc: "sasa",
  //     img: ""
  //   },
  // ];

  return (
    <div className="customer">
      <div className="customer__top">
        <span>Testimonials</span>
        <h3>What our customer say</h3>
      </div>

      <Swiper
        slidesPerView={3.5}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        <SwiperSlide className="customer__swiper">
          <div className="customer__wrapper">
            <Image className="customer__icon" src={imgIcon1} />
            <p>
              “Now, i can track my business activity with easier and have a
              great understandable to operate the products
            </p>

            <div className="customer__profile__list">
              <div>
                <Image src={profileImg1} />
                <span>Janne Cooper</span>
              </div>

              <div>
                <Image src={starIcon} />
                <span>4.3</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customer__swiper">
          <div className="customer__wrapper">
            <Image className="customer__icon" src={imgIcon1} />
            <p>
              “Now, i can track my business activity with easier and have a
              great understandable to operate the products
            </p>

            <div className="customer__profile__list">
              <div>
                <Image src={profileImg1} />
                <span>Janne Cooper</span>
              </div>

              <div>
                <Image src={starIcon} />
                <span>4.3</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customer__swiper">
          <div className="customer__wrapper">
            <Image className="customer__icon" src={imgIcon1} />
            <p>
              “Now, i can track my business activity with easier and have a
              great understandable to operate the products
            </p>

            <div className="customer__profile__list">
              <div>
                <Image src={profileImg2} />
                <span>Janne Cooper</span>
              </div>

              <div>
                <Image src={starIcon} />
                <span>4.3</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customer__swiper">
          <div className="customer__wrapper">
            <Image className="customer__icon" src={imgIcon1} />
            <p>
              “Now, i can track my business activity with easier and have a
              great understandable to operate the products
            </p>

            <div className="customer__profile__list">
              <div>
                <Image src={profileImg1} />
                <span>Janne Cooper</span>
              </div>

              <div>
                <Image src={starIcon} />
                <span>4.3</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="customer__swiper">
          <div className="customer__wrapper">
            <Image className="customer__icon" src={imgIcon1} />
            <p>
              “Now, i can track my business activity with easier and have a
              great understandable to operate the products
            </p>

            <div className="customer__profile__list">
              <div>
                <Image src={profileImg2} />
                <span>Janne Cooper</span>
              </div>

              <div>
                <Image src={starIcon} />
                <span>4.3</span>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Custormer;
