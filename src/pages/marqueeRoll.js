import React from "react";
import Marquee from "react-fast-marquee";
import { BsDiamondFill } from "react-icons/bs";

const MarqueeSection = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="0">
      <Marquee
        className=" w-full h-[full-content] py-10 bg-main text-light-main leading"
        autoFill
        speed={150}
      >
        <div className="flex items-center border-t-2 border-b-2 gap-10 border-light p-4">
          {[
            "I can be a React component",
            "And I can be a React component",
            "I am Milan",
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center text-[10vw] gap-4 mb-6"
            >
              <span className="px-4 uppercase leading-none">{item}</span>
              <BsDiamondFill className="text-black text-4xl " />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default MarqueeSection;
