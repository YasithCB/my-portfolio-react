import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { About } from "./About";
import { Education } from "./Education";
import { Skills } from "./Skills";
import { Contact } from "./Contact";

const Layout = () => {
  const bgStyle = {
    backgroundColor: "#16181B",
  };

  return (
    <>
      <div style={bgStyle}>
        <Header />
        <Home />
        <About />
        <Education />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Layout;
