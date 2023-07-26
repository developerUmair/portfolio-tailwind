import React from "react";
import {
  AiFillLinkedin,
  AiFillTwitterSquare,
  AiFillYoutube,
} from "react-icons/ai";

import cartoon from "/public/images/dev-ed-wave.png";

const Hero = () => {
  return (
    <>
      <div className="text-center p-6 lg:p-10">
        <h1 className="text-5xl py-1 text-teal-500 font-burtons md:text-6xl">
          syed <span className="font-semibold underline px-3">umair</span>
        </h1>
        <h2 className="text-2xl py-2 font-semibold md:text-3xl dark:text-white">
          <span className="bg-black text-white px-4 dark:bg-white dark:text-black">
            Front-End
          </span>{" "}
          & UI Developer
        </h2>
        <p className="text-md py-5 leading-8 text-gray-800 md:max-w-xl md:mx-auto dark:text-gray-500">
          Experienced Front-End & UI Developer creating engaging web interfaces
          with HTML, CSS, JavaScript and popular front-end frameworks. Committed
          to delivering exceptional user experiences.
        </p>
      </div>
      <div className="text-3xl lg:text-5xl flex justify-center gap-14 lg:gap-16 py-3 ">
        <a href="https://twitter.com/" target="_blank">
          <AiFillTwitterSquare className="text-[#1DA1F2]" />
        </a>
        <a href="https://linkedin.com/" target="_blank">
          <AiFillLinkedin className="text-[#0A66C2]" />
        </a>
        <a href="https://youtube.com/" target="_blank">
          <AiFillYoutube className="text-[#FF0000]" />
        </a>
      </div>
      <div
        className="relative bg-gradient-to-b from-teal-500 to-white rounded-full mx-auto w-80 h-80 mt-5 lg:mt-10
      md:h-96 md:w-96"
      >
        <img src={cartoon} alt="Cartoon Image here" className="object-cover" />
      </div>
    </>
  );
};

export default Hero;
