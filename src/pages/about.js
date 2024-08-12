import React from "react";
import SectionTitle from "../component/sectionTitle";

const About = () => {
  return (
    <section className="bg-light-main h-screen w-full">
      <div
        data-scroll
        data-scroll-section
        data-scroll-speed="0.2"
        className="p-3"
      >
        <SectionTitle title={"About"} />

        <div>
          Hi, I’m Matt. Nice to meet you. Since beginning my journey as a
          freelance designer 12 years ago, I've done remote work for agencies,
          consulted for startups, and collaborated with talented people to
          create digital products for both business and consumer use. I'm
          quietly confident, naturally curious, and perpetually working on
          improving my chops.
        </div>
        <div>
          Specializing in refined digital web experiences with a focus on
          animated, responsive, and interactive content. Partnering with
          agencies and brands that value design and development integrity.
          Delivering highly executed front-end user experiences by paying close
          attention to the nuances of design, optimization, and performance.
          <div>
            <p className="font-outlined" style={{ color: "black" }}>
              Well, well, well, look who stumbled upon my corner of the
              internet! I'm Milan Goti, a freelance full-stack developer on a
              mission to make the web a more intuitive and visually stunning
              place. You'll often find me neck-deep in lines of code, armed with
              a relentless drive for creativity and a knack for solving complex
              puzzles. I firmly believe in working with integrity—it’s the
              foundation of everything I do. I’m not just here to build
              websites; I’m here to build experiences that users won’t forget in
              a hurry. And trust me, I don’t just keep up with industry trends—I
              set them. When it comes to teamwork, I’ve got a mantra: "Teamwork
              makes the dream work." Cliché, right? But hey, there’s a reason
              it’s been around for so long. I thrive in collaborative
              environments where diverse perspectives collide and ignite sparks
              of innovation. So, buckle up and join me on this wild ride of
              coding adventures. Together, we’ll create something that’ll make
              waves. Ready to dive in?
            </p>
            {/* <div className="bg-lime-300 relative w-full h-64 flex justify-center items-center">
              <div className="w-64 h-64 rounded-t-full rounded-r-full bg-slate-500"></div>
              <div className="w-64 h-64 rounded-b-full rounded-r-full bg-slate-500"></div>
              <div className="w-64 h-64 rounded--full rounded-r-full bg-slate-500"></div>
              <div className="w-64 h-64 rounded-t-full rounded-l-full bg-slate-500"></div>
              <div className="w-64 h-64 rounded-b-full rounded-l-full bg-slate-500"></div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
