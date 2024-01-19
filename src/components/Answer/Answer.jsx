"use client";
import React from "react";
import { useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import { HiOutlineChevronUp } from "react-icons/hi"


import { v4 as uuidv4 } from "uuid";
import "./Answer.scss";

const Answer = () => {
  const [collapse, setCollapse] = useState(false);
  console.log(collapse);
  const openToogle = (i) => {
    if (collapse === i) {
      return setCollapse(true);
    } else {
      setCollapse(i);
    }
  };

  const obj = [
    {
      title: "How can we help your business?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa quod veritatis sit non neque sequi quidem at nostrum dignissimos.",
      img: "./assets/ArrowIcon.svg",
    },
    {
      title: "What are the advantages of Bisnext",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa quod veritatis sit non neque sequi quidem at nostrum dignissimos.",
      img: "./assets/ArrowIcon.svg",
    },
    {
      title: "Let’s find an office near you?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa quod veritatis sit non neque sequi quidem at nostrum dignissimos.",
      img: "./assets/ArrowIcon.svg",
    },
    {
      title: "How IT consultancy experts work?",
      body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consequatur culpa quod veritatis sit non neque sequi quidem at nostrum dignissimos.",
      img: "./assets/ArrowIcon.svg",
    },
  ];
  return (
    <div className="answer">
      <div className="container">
        <div className="answer__wrapper">
          <ul className="answer__left__side">
            {obj.map((item, i) => (
              <li key={uuidv4()} onClick={() => openToogle(i)}>
                <div>
                  <p>{item?.title}</p>
                  <span>
                    {collapse === i ? <HiOutlineChevronUp /> : <FaAngleDown />}
                  </span>
                </div>
                <div
                  className={
                    collapse === i
                      ? "answer__left__body show"
                      : "answer__left__body"
                  }
                >
                  {item?.body}
                </div>
              </li>
            ))}
          </ul>

          <div className="answer__right__side">
            <span>FAQs</span>
            <h4>Be Kind to Your Mind Question & Answer</h4>
            <p>
              All Your Qustions are in A document, in question and answer
              format, that introduces newcomers to a topic or answers common
              questions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Answer;
