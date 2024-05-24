import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

const Testimonial = (props) => {
  let reviews = props.reviews;
  const [index, setIndex] = useState(0);

  function leftShiftHandler() {
    if (index - 1 < 0) {
      setIndex(reviews.length - 1);
    } else {
      setIndex(index - 1);
    }
  }

  const rightShiftHandler = () => {
    if (index + 1 >= reviews.length) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  function surpriceShiftHandler() {
    let randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  }

  return (
    <div className="flex flex-row  w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <button
        className="cursor-pointer text-violet-400 hover:text-violet-600 scale-[300%] mr-5"
        onClick={leftShiftHandler}
      >
        <FiChevronLeft />
      </button>
      <div className="flex flex-col">
        <Card review={reviews[index]} />
        <div className="mt-6">
          <button
            className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
            onClick={surpriceShiftHandler}
          >
            See More
          </button>
        </div></div>

      <button
        className="cursor-pointer text-violet-400 hover:text-violet-600 scale-[300%] ml-5"
        onClick={rightShiftHandler}
      >
        <FiChevronRight />
      </button>



    </div>
  );
};

export default Testimonial;
