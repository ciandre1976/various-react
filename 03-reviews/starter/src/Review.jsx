import React from "react";
import people from "./data";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export default function Review() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];

  const prev = (index) => {
    index--;
    if (index < 0) {
      index = people.length - 1;
    }
    setIndex(index);
  };

  const next = (index) => {
    index++;
    if (index > people.length - 1) {
      index = 0;
    }
    setIndex(index);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt="name" className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={() => prev(index)}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={() => next(index)}>
          <FaChevronRight />
        </button>
      </div>
    </article>
  );
}
