import { motion } from "framer-motion";
import React from "react";
import heroImg from "../assets/images/hero-image.png";

const Landing = () => {
  const textData = [
    {
      text: "MILAN",
      className: "text-main",
      style: {
        left: "-10px",
        top: "180px",
        fontSize: "clamp(80px, 12vw, 147px)",
        zIndex: "-1",
      },
    },
    {
      text: "GOTI",
      className: "text-light-main",
      style: {
        top: "360px",
        right: "10px",
        fontSize: "clamp(80px, 12vw, 147px)",
        zIndex: "-1",
      },
    },
  ];

  return (
    <section
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="h-screen w-full flex flex-col relative"
    >
      <div className="flex justify-center relative">
        <img
          src={heroImg}
          alt="Hero"
          className="absolute h-screen w-full object-cover"
        />
        <div>
          {textData.map((item, index) => (
            <motion.p
              key={index}
              className={`kumar-one-outline-regular leading-1 font-outlined absolute ${item.className}`}
              style={item.style}
              initial={index === 0 ? { x: "-100%" } : { x: "100%" }}
              animate={index === 0 ? { x: 0 } : { x: 0 }}
              transition={{ ease: "linear", duration: 0.8, delay: index * 0.2 }}
            >
              {item.text}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Landing;
