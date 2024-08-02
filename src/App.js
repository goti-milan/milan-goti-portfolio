import { useEffect, useState } from "react";
import "./App.css";
import heroImg from "./assets/images/hero-image.png";
import Contact from "./component/Contact";
import { FaGithub } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Header from "./component/Header";
import TestimonialCard from "./component/TestimonialCard";
import ProjectCard from "./component/ProjectCard";
import { projects, testimonialData } from "./utils/static";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { BsDiamondFill } from "react-icons/bs";
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


const skills = [
  { id: 0, name: 'JavaScript', level: "87" },
  { id: 1, name: 'React', level: "85" },
  { id: 2, name: 'Node.js', level: "65" },
  { id: 3, name: 'CSS', level: "83" },
  { id: 4, name: 'Tailwind CSS', level: "67" },
];

function App() {
  const [openHeader, setOpenHeader] = useState(false);
  const [yPosition, setYPosition] = useState(window.scrollY);
  const [activeSlide, setActiveSlide] = useState(0);
  const [progress, setProgress] = useState(skills[0]?.level);
  const [selectedSkill, setSelectedSkill] = useState()


  console.log('selectedSkill', selectedSkill);

  useEffect(() => {
    setSelectedSkill(skills[0])
  }, [skills])


  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => (prev < selectedSkill?.level ? prev + 1 : prev));
    }, 50);

    return () => clearInterval(interval);
  }, [selectedSkill]);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };


  const settings = {
    className: "center",
    centerMode: true,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setYPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log("element", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <header>
        <Header
          openHeader={openHeader}
          setOpenHeader={setOpenHeader}
          scrollToSection={scrollToSection}
        />
      </header>
      <main className="flex-col gap-6">
        <section
          className="h-100% w-100% flex flex-col relative"
          style={{ minHeight: "800px" }}
        >
          <div className="flex justify-center relative">
            <img
              src={heroImg}
              className="absolute"
              style={{ height: "788px" }}
            />
            <div className="">
              <p
                className="kumar-one-outline-regular font-outlined absolute text-main"
                style={{
                  left: "30px",
                  top: "180px",
                  zIndex: "-1",
                  fontSize: "147px",
                }}
              >
                MILAN
              </p>
              <p
                className="kumar-one-outline-regular font-outlined absolute text-light-main"
                style={{
                  top: "400px",
                  right: "150px",
                  fontSize: "147px",
                  zIndex: "-1",
                }}
              >
                GOTI
              </p>
            </div>
          </div>
          <div className="flex-grow flex items-end">
            <Marquee
              className="text-light-main mb-10"
              autoFill
              speed={50}
              style={{ fontSize: "32px" }}
            >
              <span className="px-4">I can be a React component.</span>
              <BsDiamondFill className="text-main text-sm" />
              <span className="px-4">And I can be a React component.</span>
              <BsDiamondFill className="text-main text-sm" />
              <span className="px-4">I am milan.</span>
              <BsDiamondFill className="text-main text-sm" />
            </Marquee>
          </div>
        </section>

        <section className="container bg-light-main h-[600px] w-[90%] mx-[5%]">
          <div className="p-3">
            <div className="text-dark-main " style={{ fontSize: "50px" }}>
              <span className="border border-main px-8 rounded-full hover:bg-main">
                ABOUT
              </span>
            </div>
            <div>
              Hi, I’m Matt. Nice to meet you. Since beginning my journey as a
              freelance designer 12 years ago, I've done remote work for
              agencies, consulted for startups, and collaborated with talented
              people to create digital products for both business and consumer
              use. I'm quietly confident, naturally curious, and perpetually
              working on improving my chops.
            </div>
            <div>
              Specializing in refined digital web experiences with a focus on
              animated, responsive, and interactive content. Partnering with
              agencies and brands that value design and development integrity.
              Delivering highly executed front-end user experiences by paying
              close attention to the nuances of design, optimization, and
              performance.
              <div>
                <p className="font-outlined" style={{ color: "black" }}>
                  Well, well, well, look who stumbled upon my corner of the
                  internet! I'm Milan Goti, a freelance full-stack developer on
                  a mission to make the web a more intuitive and visually
                  stunning place. You'll often find me neck-deep in lines of
                  code, armed with a relentless drive for creativity and a knack
                  for solving complex puzzles. I firmly believe in working with
                  integrity—it’s the foundation of everything I do. I’m not just
                  here to build websites; I’m here to build experiences that
                  users won’t forget in a hurry. And trust me, I don’t just keep
                  up with industry trends—I set them. When it comes to teamwork,
                  I’ve got a mantra: "Teamwork makes the dream work." Cliché,
                  right? But hey, there’s a reason it’s been around for so long.
                  I thrive in collaborative environments where diverse
                  perspectives collide and ignite sparks of innovation. So,
                  buckle up and join me on this wild ride of coding adventures.
                  Together, we’ll create something that’ll make waves. Ready to
                  dive in?
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="skills"
          className="container bg-light-main"
          style={{
            height: "100%",
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
        >
          <div
            className="text-drak-main"
            style={{ display: "grid", textAlign: "left" }}
          >
            <div className="p-3">
              <div className="text-dark-main " style={{ fontSize: "50px" }}>
                <span className="border border-main px-8 rounded-full hover:bg-main">
                  SKILLS
                </span>
              </div>
              <div style={{ fontSize: "20px" }}>Tech I am proficient with:</div>

              <div className="flex flex-wrap justify-between items-start p-8 bg-gray-100 ">
                {/* Skills Section */}
                <div className="flex flex-wrap justify-center w-full md:w-1/2">
                  {skills.map((skill, index) => (
                    <div
                      key={skill?.id}
                      className="bg-white shadow-lg rounded-lg p-4 m-4 w-60 cursor-pointer"
                      style={{
                        border: selectedSkill?.id === skill?.id ? '1px solid red' : 'none',
                      }}
                      onClick={() => handleSkillClick(skill)}
                    >
                      <h3 className="text-lg font-semibold text-gray-700">{skill.name}</h3>
                      <p className="text-gray-500">{skill.description}</p>
                    </div>
                  ))}
                </div>

                {/* Progress Bar Section */}
                <div className="w-full md:w-1/2 flex justify-center items-center">
                  <div className="h-[250px] w-[250px]">
                    <CircularProgressbar
                      value={progress}
                      text={`${progress}%`}
                      styles={buildStyles({
                        pathColor: '#ff4901',
                        textColor: '#ff4901',
                        trailColor: 'light-gray',
                        backgroundColor: '#f3f3f3',
                        pathTransition: 'stroke-dashoffset 1s ease 0s',
                        pathTransitionDuration: 1,
                        strokeLinecap: 'butt',
                      })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="skills_1">
              <div className="responsive-container-block bigContainer">
                <div className="responsive-container-block Container">
                  <div className="responsive-container-block cardContainer">
                    <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-6 wk-mobile-12">
                      <div className="card">
                        <p className="text-main text-5xl stats">75K+</p>
                        <p className="text-blk cardHeading">
                          Lorem ipsum dolor sit amet, consectetur adip
                        </p>
                      </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-6 wk-mobile-12">
                      <div className="card">
                        <p className="text-main text-5xl stats">95%</p>
                        <p className="text-blk cardHeading">
                          Lorem ipsum dolor sit amet, consectetur adip
                        </p>
                      </div>
                    </div>
                    <div className="responsive-cell-block wk-desk-4 wk-ipadp-4 wk-tab-6 wk-mobile-12">
                      <div className="card">
                        <p className="text-main text-5xl stats">4.8</p>
                        <p className="text-blk cardHeading">
                          Lorem ipsum dolor sit amet, consectetur adip
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container bg-white mx-[5%] w-[90%]">
          <div className="p-3">
            <div className="text-dark-main " style={{ fontSize: "50px" }}>
              <span className="border border-main px-8 rounded-full hover:bg-main">
                PROJECTS
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project) => (
                <ProjectCard project={project} />
              ))}
            </div>

            {/* <div className="flex items-center justify-center min-h-screen bg-gray-100">
              <div className="relative">
                <div className="bg-red-400 w-12 h-12 rounded-full transition-all duration-300 flex items-center justify-center hover:w-40 hover:pr-0">
                  <span className="text-black whitespace-nowrap pl-2 opacity-100 hover:opacity-100 transition-opacity duration-300">Project</span>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        <section
          id="contact"
          className="container bg-light-main mx-[5%] w-[90%]"
        >
          <div className="p-3">
            <div className="text-dark-main" style={{ fontSize: "50px" }}>
              <span className="border border-main px-8 rounded-full">
                Testimonials
              </span>
            </div>
            <div className="py-12 flex">
              <div className="container mx-auto px-6 text-center">
                <Slider {...settings}>
                  {testimonialData.map((testimonial, index) => (
                    <div className="p-4">
                      <TestimonialCard
                        testimonial={testimonial}
                        key={index}
                        isActive={index === activeSlide}
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </section>

        <section className="container bg-light-main mx-[5%] w-[90%]">
          <Contact />
        </section>

        <div className="absolute  right-2 sticky flex justify-end">
          {window.scrollY > 1 ? (
            <IoArrowUpCircleOutline
              className="text-light-main text-6xl hover:text-main"
              onClick={() => scrollToTop()}
            />
          ) : null}
        </div>
      </main>

      <footer
        className="relative flex items-center px-10 justify-between bg-main text-light-main"
        style={{ height: "200px", width: "100%" }}
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
    </div>
  );
}

export default App;
