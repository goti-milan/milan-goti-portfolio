import React from "react";
import { FaGithub, FaHeart } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      data-scroll
      data-scroll-section
      data-scroll-speed="0.1"
      className="relative pb-0 h-[30vw] w-full flex items-center px-10 justify-between bg-main text-light-main"
    >
      <div className="flex flex-col gap-1 text-dark-main">
        <a href="#" className="hover:text-light-main">
          About Me
        </a>
        <a href="#" className="hover:text-light-main">
          Technology
        </a>
        <a href="#" className="hover:text-light-main">
          Work
        </a>
        <a href="#" className="hover:text-light-main">
          Contact
        </a>
      </div>

      <div className="flex items-center gap-2">
        <FaGithub className="text-xl text-dark-main" />
        <span className="font-bold text-dark-main">Milan Goti</span>
      </div>
      <div className="flex flex-col gap-2 text-dark-main">
        <p className="flex gap-1 text-center text-sm mt-4">
          Made with
          <FaHeart className="text-light-main color-light-main" />
          by Milan Goti
        </p>
      </div>
    </footer>
  );
};

export default Footer;
