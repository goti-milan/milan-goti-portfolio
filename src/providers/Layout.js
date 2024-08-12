import React, { useState } from "react";
import Footer from "../component/Footer";
import Header from "../component/Header";

const Layout = ({ children }) => {
  const [openHeader, setOpenHeader] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    console.log("element", element);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App">
      <Header
        openHeader={openHeader}
        setOpenHeader={setOpenHeader}
        scrollToSection={scrollToSection}
      />
      <main className="flex-col gap-6">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
