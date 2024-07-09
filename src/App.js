import { useEffect, useState } from 'react';
import './App.css';
import NavbarMenu from './component/Navbar-menu';
import heroImg from './assets/images/hero-image.png'
import Contact from './component/Contact';
import { FaGithub } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import Marquee from "react-fast-marquee";

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

    // Clean up the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





  return (
    <div className="App">

      <header className=''>
        <div className='relative flex justify-end'>
          {openHeader && <NavbarMenu openHeader={openHeader} setOpenHeader={setOpenHeader} />}
          <button
            className='h-16'
            style={{
              transform: `rotateZ(${openHeader ? 45 : 0}deg)`,
              transition: 'transform 1s',
              position: 'sticky'
            }}
            onClick={() => setOpenHeader(!openHeader)}>
            <IoMdAdd className='text-6xl' style={{ color: '#ff4901'}} />
          </button>
        </div>
      </header>

      <main>
        <section className='h-screen w-screen flex flex-col relative' style={{ minHeight: "800px" }}>
          <div className='flex justify-center relative'>
            <img src={heroImg} className='absolute' style={{ height: "788px" }} />
            <div className=''>
              <p className='kumar-one-outline-regular font-outlined absolute' style={{ color: "#FF4901", left: "30px", top: "180px", zIndex: "-1", fontSize: "147px" }}>MILAN</p>
              <p className='kumar-one-outline-regular font-outlined absolute' style={{ color: "white", top: "400px", right: "150px", fontSize: "147px", zIndex: "-1" }}>GOTI</p>
            </div>
          </div>
          <div className='flex-grow flex items-end'>
            <Marquee autoFill speed={50} style={{ color: "white", fontSize: "32px", marginBottom: "20px" }}>
              I can be a React component, multiple React components, or just some text.
            </Marquee>
          </div>
        </section>



        <section className='container' style={{ height: "600px", background: "#FF4901", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='p-3' style={{}}>
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
        </section>

        {/* <section className='container' style={{ height:"100%" , background: "black", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='text-white'>
            <h4>
              Skills
            </h4>
            <div>
              Tech I am profcient with:
            </div>
          </div>
          <div className='text-white flex flex-col gap-5 bg-black '>
            <p id='skillset-1' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-1 '>Angular</p>
            <p id='skillset-2' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-2 '>React</p>
            <p id='skillset-3' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-3 '>Typescript</p>
            <p id='skillset-4' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-4 '>Next js</p>
            <p id='skillset-5' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-5 '>Redux</p>
            <p id='skillset-6' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-6 '>Figma</p>
            <p id='skillset-7' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-7 '>Canva</p>
            <p id='skillset-8' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-8 '>Adobe</p>
            <p id='skillset-9' className='link-item font-normal text-9xl antialiased hover:text-yellow-500 skillset-9 '>Design</p>
          </div>
        </section> */}


        {/* <section className='container' style={{ height: "600px", background: "orange", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='p-3' style={{}}>
            <div className='' style={{ fontSize: "100px" }}>
              Projects
            </div>


          </div>
        </section> */}

        {/* <section className='container' style={{ height: "700px", background: "white", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <Contact />
        </section> */}

        <div className="absolute bottom-1 right-2 sticky flex justify-end">
          {window.scrollY > 1 ? <IoArrowUpCircleOutline className="text-white text-6xl" onClick={() => scrollToTop()} /> : null}
        </div>

      </main>

      <footer className="relative flex items-center justify-between bg-gray-700 text-white" style={{ height: "200px" }}>

        <div className="flex flex-col gap-1">
          <a href="#" className="hover:text-gray-300">About Me</a>
          <a href="#" className="hover:text-gray-300">Technology</a>
          <a href="#" className="hover:text-gray-300">Work</a>
          <a href="#" className="hover:text-gray-300">Contact</a>
        </div>

        <div className="flex items-center gap-2">
          <FaGithub className="text-xl" />
          <span className="font-bold">Milan Goti</span>
        </div>
        <div className="flex flex-col gap-2">
          <p className="flex gap-1 text-center text-sm mt-4">
            Made with
            <FaHeart style={{ color: "orange", }} />
            by Milan Goti
          </p>
        </div>

      </footer>


    </div>
  );
}

export default App;
