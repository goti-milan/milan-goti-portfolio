import React, { useEffect, useState } from "react";
import "./App.css";
import Contact from "./component/Contact";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-circular-progressbar/dist/styles.css";
import LocomotiveScroll from "locomotive-scroll";
import Landing from "./pages/landing";
import MarqueeSection from "./pages/marqueeRoll";
import About from "./pages/about";
import Skills from "./pages/skills";
import Projects from "./pages/projects";
import Testimonials from "./pages/testimonials";
import Layout from "./providers/Layout";
import { IoArrowUpCircleOutline } from "react-icons/io5"; // Import this for the scroll icon

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [openHeader, setOpenHeader] = useState(false);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("#main-container"),
      smooth: true,
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300); // Show button after scrolling 300px
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <div id="main-container">
        <Landing />
        <MarqueeSection />
        <About />
        <Skills />
        <Projects />
        <Testimonials />
        <Contact />

        {showScrollTop && (
          <div className="fixed bottom-10 right-2">
            <button onClick={scrollToTop}>
              <IoArrowUpCircleOutline className="text-main text-6xl hover:text-light-main" />
            </button>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default App;
