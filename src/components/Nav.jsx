import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";

const Nav = ({ darkMode, setDarkMode }) => {
  console.log(darkMode);
  return (
    <div className="lg:py-10 sm:py-6 mb-12 flex justify-between">
      <h1 className="font-burtons text-2xl md:text-4xl dark:text-gray-200">
        CodeMyIdea
      </h1>

      <ul className="flex items-center text-xl">
        <li className="mr-6">
          <BsFillMoonStarsFill
            className="cursor-pointer text-2xl dark:text-white"
            onClick={() => setDarkMode(!darkMode)}
          />
        </li>
        <li className="flex justify-between items-start bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-1 border-none rounded font-burtons">
          <a href="/public/resume.pdf" className="pr-2" download>
            Resume
          </a>
          <BsDownload className="text-white font-bold" />
        </li>
      </ul>
    </div>
  );
};

export default Nav;
