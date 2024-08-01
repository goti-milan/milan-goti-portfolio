import React from "react";

const TestimonialCard = ({ testimonial, isActive }) => {
  const { name, position, review, image } = testimonial;
  return (
    <div
    className={`p-4 rounded-lg shadow-lg ${
      isActive
        ? "bg-main text-light-main translate-y-[-10px] scale-105"
        : "bg-light-main text-gray-800 mt-12"
    } transform transition-transform duration-300`}
  >
    <div className="flex flex-col items-center text-center">
      <img src={image} alt={name} className="w-16 h-16 rounded-full mb-4" />
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm italic mb-4">{position}</p>
      <p className="text-sm">{review}</p>
    </div>
  </div>
  );
};

export default TestimonialCard;
