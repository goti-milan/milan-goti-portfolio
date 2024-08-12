import React, { useState } from "react";
import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  const { id, title, description, image, link } = project;
  const [hovered, setHovered] = useState(false);

  return (
    <a href={link} target="_blank" rel="noopener noreferrer" key={id}>
      <div
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        className="rounded overflow-hidden shadow-lg bg-light-main relative transition-all duration-300 hover:border-2 hover:border-main cursor-pointer"
      >
        <div className="relative">
          <img
            className={`w-full transition-opacity duration-300 ${
              hovered ? "opacity-0" : "opacity-100"
            }`}
            src={image}
            alt={title}
          />
          {hovered && (
            <div className="px-6 py-4 absolute inset-0 flex flex-col justify-center items-center bg-white bg-opacity-90">
              <div className="font-bold text-xl mb-2">{title}</div>
              <p className="text-dark-main text-base text-center">
                {description}
              </p>
            </div>
          )}
          <div
            className={`absolute top-4 right-4 transition-transform duration-300 ${
              hovered ? "rotate-180" : ""
            }`}
          >
            {hovered ? (
              <BsArrowUpRightCircleFill className="text-main text-4xl" />
            ) : (
              <BsArrowUpRightCircle className="text-light-main text-4xl" />
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
