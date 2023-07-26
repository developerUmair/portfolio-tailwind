import React from "react";
import Section from "./common/Section";
import Projects from "./Projects";

const Portfolio = () => {
  const data = {
    title: "Portfolio",
    para1:
      "Since the beginning of my journey as a freelance Front-End developer I've done remote work for",
    para2:
      "and collaborated with talanted people to create digital products for both business and consumer use",
    para3: "I offer from a wide range of services, on platform like",
    highlightedText: ["agencies", "startups", "Fiverr", "Upwork"],
  };
  return (
    <>
      <Section
        title={data.title}
        para1={data.para1}
        para2={data.para2}
        para3={data.para3}
        highlightedText={data.highlightedText}
      />
      <Projects />
    </>
  );
};

export default Portfolio;
