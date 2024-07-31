
import React from 'react';
import { BsArrowUpRightCircle } from "react-icons/bs";


const ProjectCard = ({ project }) => {
    const { id, title, description, image, link } = project
    return (
        <div key={id} className="rounded overflow-hidden shadow-lg bg-white relative">
            <div className="relative">
                <img className="w-full" src={image} alt={title} />
                <div className="absolute top-4 right-4 transition-transform hover:rotate-180">
                    <BsArrowUpRightCircle className="text-black text-6xl" />
                </div>
            </div>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;
