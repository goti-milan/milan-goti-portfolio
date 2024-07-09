import { useEffect, useState } from 'react';
import './App.css';
import NavbarMenu from './component/Navbar-menu';
import heroImg from './assets/images/hero-image.png'
import Contact from './component/Contact';
import { FaGithub } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { IoArrowUpCircleOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";

function App() {
  const [openHeader, setOpenHeader] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  };


 


  return (
    <div className="App">

      <header>
        <div className='relative flex justify-end'>
          {openHeader && <NavbarMenu openHeader={openHeader} setOpenHeader={setOpenHeader} />}
          <button
            className='h-16'
            style={{
              transform: `rotateZ(${openHeader ? 45 : 0}deg)`,
              transition: 'transform 1s',
            }}
            onClick={() => setOpenHeader(!openHeader)}>
            <IoMdAdd className='text-white text-6xl' />
          </button>
        </div>
      </header>

      <main>
        <section className='h-600 w-screen' style={{ height: "800px" }}>
          <div className='flex justify-center relative'>
            <img src={heroImg} className='absolute' style={{ height: "400px" }} />
            <div className=''>
              <p className='kumar-one-outline-regular font-outlined absolute' style={{ color: "orange", left: "230px", top: "20px", zIndex: "-1", fontSize: "147px" }} >MILAN</p>
              <p className='kumar-one-outline-regular font-outlined absolute' style={{ color: "white", top: "200px", right: "310px", fontSize: "147px", zIndex: "-1" }}>GOTI</p>
            </div>
          </div>
        </section>

        <section className='container' style={{ height: "600px", background: "orange", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='p-3' style={{}}>
            <div className='' style={{ fontSize: "100px" }}>
              ABOUT
            </div>


          </div>
        </section>

        <section className='container' style={{ height: "600px", background: "white", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='p-3' style={{}}>
            <div className='' style={{ fontSize: "100px" }}>
              Technology
            </div>


          </div>
        </section>

        <section className='container' style={{ height: "600px", background: "orange", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <div className='p-3' style={{}}>
            <div className='' style={{ fontSize: "100px" }}>
              Projects
            </div>


          </div>
        </section>

        <section className='container' style={{ height: "700px", background: "white", width: '100%', marginLeft: "5%", marginRight: "5%" }}>
          <Contact />
        </section>

        <div className="absolute bottom-1 right-2 sticky flex justify-end">
          <IoArrowUpCircleOutline className="text-white text-6xl" onClick={() => scrollToTop()} />
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
