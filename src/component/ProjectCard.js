import React, { useState } from "react";
import { BsArrowUpRightCircle, BsArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({ project }) => {
  const { id, title, description, image, link } = project;
  const [hovered, setHovered] = useState(false);
  return (
    <div
      key={id}
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
      className="rounded overflow-hidden shadow-lg bg-light-main relative transition-all duration-300 hover:border-2 hover:border-main"
    >
      <div className="relative">
        {!hovered ? (
          <img className="w-full" src={image} alt={title} />
        ) : (
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{title}</div>
            <p className="text-dark-main text-base">{description}</p>
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
            <BsArrowUpRightCircle className="text-main text-4xl" />
          )}
        </div>
        {/* {hovered && (
          <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent opacity-75 pointer-events-none"></div>
        )} */}
      </div>
    </div>
  );
};

export default ProjectCard;
