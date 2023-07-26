import React from "react";

const Section = ({ title, para1, para2, para3, highlightedText }) => {
  return (
    <>
      <h1 className="text-3xl py-4 font-burtons dark:text-gray-400">{title}</h1>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        {para1}
        <span className="text-teal-500"> {highlightedText[0]} </span>
        consulted for{" "}
        <span className="text-teal-500">{highlightedText[1]} </span>
        {para2}
      </p>
      <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
        {para3}
        <span className="text-teal-500"> {highlightedText[2]} </span> and
        <span className="text-teal-500"> {highlightedText[3]} </span>.
      </p>
    </>
  );
};

export default Section;
