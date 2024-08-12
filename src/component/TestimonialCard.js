import React from "react";

const TestimonialCard = ({ testimonial, isActive }) => {
  const { name, position, review, image } = testimonial;
  return (
    <div
      className={`p-6 rounded-lg shadow-lg transition-all duration-300 ${
        isActive
          ? "bg-main text-light-main translate-y-[-10px] scale-105"
          : "bg-light-main text-gray-800 mt-12"
      }`}
      style={{
        boxShadow: isActive ? "0px 10px 20px rgba(0, 0, 0, 0.15)" : "none",
      }}
    >
      <div className="flex flex-col items-center text-center">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mb-4 border-2 border-white shadow-md"
        />
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm italic text-gray-500 mb-4">{position}</p>
        <p className="text-sm leading-relaxed">{review}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
