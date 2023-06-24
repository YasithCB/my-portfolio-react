import React from "react";
import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import { About } from "./About";

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
        <Footer />
      </div>
    </>
  );
};

export default Layout;
