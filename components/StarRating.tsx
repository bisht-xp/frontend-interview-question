"use client";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const StarRating = ({ noOfStar }: { noOfStar: number }) => {
  const [count, setCount] = useState<number>(-1);
  const [hover, setHover] = useState(-1);


  const handleClick = (index: number) => {
    setCount(index);
  };

  const handleMouseHover = (index: number) => {
    setHover(index);
    console.log("wokring: ", index);
  }

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="text-3xl font-semibold text-center">STAR RATING</div>
      <div className="flex justify-center items-center mt-10">
        {[...Array(noOfStar).keys()].map((_, i) => (
          <FaStar
            onClick={() => handleClick(i)}
            key={i}
            className={`${
              count >= i || hover >= i ? "text-yellow-300" : "text-black"
            }`}
            onMouseMove={() => handleMouseHover(i)}

            onMouseLeave={() => setHover(count)}
          />
        ))}
      </div>
    </div>
  );
};

export default StarRating;
