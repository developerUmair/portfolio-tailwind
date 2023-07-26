import React from "react";
import { projectsData } from "../data/Data";

const Projects = () => {
  return (
    <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
      {projectsData.map((img) => (
        <div key={img.id} className="basis-1/3 flex-1">
          <img
            src={img.src}
            alt=""
            className="rounded-lg object-cover"
            width={"100%"}
            height={"100%"}
          />
        </div>
      ))}
    </div>
  );
};

export default Projects;
