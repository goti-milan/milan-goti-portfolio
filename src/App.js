import { useEffect, useState } from 'react';
import './App.css';
import heroImg from './assets/images/hero-image.png'
import Contact from './component/Contact';
import { FaGithub } from "react-icons/fa";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Marquee from "react-fast-marquee";
import Header from './component/Header';



const technology = ['React', 'Redux', 'Angular', 'Adobe', 'Canva', 'Visual', 'Node', 'Express']

function App() {
  const [openHeader, setOpenHeader] = useState(false);
  const [yPosition, setYPosition] = useState(window.scrollY)


  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setYPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log('element', element);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      <header>
        <Header openHeader={openHeader} setOpenHeader={setOpenHeader} scrollToSection={scrollToSection} />
      </header>
      <main className='flex-col gap-6'>
        <section className='h-100% w-100% flex flex-col relative' style={{ minHeight: "800px" }}>
          <div className='flex justify-center relative'>
            <img src={heroImg} className='absolute' style={{ height: "788px" }} />
            <div className=''>
              <p className='kumar-one-outline-regular font-outlined absolute text-main' style={{ left: "30px", top: "180px", zIndex: "-1", fontSize: "147px" }}>MILAN</p>
              <p className='kumar-one-outline-regular font-outlined absolute text-light-main' style={{ top: "400px", right: "150px", fontSize: "147px", zIndex: "-1" }}>GOTI</p>
            </div>
          </div>
          <div className='flex-grow flex items-end'>
            <Marquee className='text-light-main mb-10' autoFill speed={50} style={{ fontSize: "32px" }}>
              I can be a React component, multiple React components, or just some text.
            </Marquee>
          </div>
        </section>

        {/* <section className='container bg-main' style={{ height: "600px", width: '90%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='p-3'>
            <div className='' style={{ fontSize: "100px" }}>
              ABOUT
            </div>

            <div>
              Hi, I’m Matt. Nice to meet you.
              Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.
            </div>
            <div>
              Specializing in refined digital web experiences with a focus on animated, responsive, and interactive content.
              Partnering with agencies and brands that value design and development integrity.

              Delivering highly executed front-end user experiences by paying close attention to the nuances of design, optimization, and performance.
            </div>


          </div>
        </section> */}

        {/* <section id='skills' className='container bg-dark-main' style={{ height: "100%", width: '90%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='text-light-main' style={{ display: 'grid', textAlign: 'right' }}>
            <div style={{ fontSize: '100px', width: '100%', justifySelf: 'end' }}>
              SKILLS
            </div>
            <div style={{ fontSize: '20px' }}>
              Tech I am proficient with:
            </div>
          </div>
          <div className='text-light-main flex flex-col gap-5 bg-dark-main '>
            {technology?.map((tech, i) =>
              <p id={`skillset-${i}`} key={i} className='link-item font-normal text-9xl antialiased hover:text-main skillset-1 cursor-pointer '>{tech}</p>
            )}
          </div>
        </section> */}


        <section className='container bg-white mx-[5%] w-[90%]'>
          <div className='p-3'>
            <div className='text-dark-main ' style={{ fontSize: "50px" }}>
              <span className='bg-main px-8 rounded-full'>
                PROJECTS
              </span>
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

        <section id='contact' className='container bg-dark-main h-[800px] mx-[5%] w-[90%]'>
          <Contact />
        </section>

        <div className="absolute  right-2 sticky flex justify-end">
          {window.scrollY > 1 ?
            <IoArrowUpCircleOutline
              className="text-light-main text-6xl hover:text-main"
              onClick={() => scrollToTop()}

            /> : null}
        </div>

      </main>

      <footer className="relative flex items-center px-10 justify-between bg-main text-light-main" style={{ height: "200px", width: "100%" }}>

        <div className="flex flex-col gap-1 text-dark-main">
          <a href="#" className="hover:text-light-main">About Me</a>
          <a href="#" className="hover:text-light-main">Technology</a>
          <a href="#" className="hover:text-light-main">Work</a>
          <a href="#" className="hover:text-light-main">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <FaGithub className="text-xl text-dark-main" />
          <span className="font-bold text-dark-main">Milan Goti</span>
        </div>
        <div className="flex flex-col gap-2 text-dark-main">
          <p className="flex gap-1 text-center text-sm mt-4">
            Made with
            <FaHeart className='text-light-main color-light-main' />
            by Milan Goti
          </p>
        </div>

      </footer>


    </div>
  );
}

export default App;
