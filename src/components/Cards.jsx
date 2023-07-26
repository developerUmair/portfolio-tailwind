import React from "react";
// import design from "/public/images/design.png";
// import code from "/public/images/code.png";
// import consulting from "/public/images/consulting.png";

import { data } from "../data/Data";

const Cards = () => {
  return (
    <>
      <div className="lg:flex lg:gap-10 md:flex md:gap-3">
        {data.map((card) => (
          <div
            className="text-center shadow-lg p-10 rounded-xl my-10"
            key={card.id}
          >
            <img
              src={card.img}
              alt=""
              width={100}
              height={100}
              className="mx-auto"
            />
            <h3 className="font-burtons text-lg font-bold pt-8 pb-2 dark:text-white">
              {card.title}
            </h3>
            <p className="py-2 text-gray-400">{card.desc}</p>
            <h4 className="py-4 text-teal-600 font-semibold">{card.caption}</h4>
            <ul>
              {card.tools.map((tool) => (
                <li
                  key={tool}
                  className="text-gray-800 py-1 dark:text-gray-400"
                >
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default Cards;
