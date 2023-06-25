import { animateScroll as scroll } from "react-scroll";
import React, { useState } from "react";

export default function Header() {
  const [activeItem, setActiveItem] = useState("home");
  const handleItemClick = (itemName) => {
    setActiveItem(itemName);
  };

  const scrollToHome = () => {
    scroll.scrollTo(0);
    handleItemClick("home");
  };
  const scrollToAbout = () => {
    scroll.scrollTo(800);
    handleItemClick("about");
  };
  const scrollToEducation = () => {
    scroll.scrollTo(1500);
    handleItemClick("education");
  };
  const scrollToSkill = () => {
    scroll.scrollTo(2150);
    handleItemClick("skill");
  };
  const scrollToContact = () => {
    scroll.scrollTo(2550);
    handleItemClick("contact");
  };
  const reload = () => {
    window.location.reload();
  };

  const cursorToPointer = {
    cursor: "pointer",
  };

  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
          <a class="navbar-brand ms-3" style={cursorToPointer} onClick={reload}>
            Yasith.
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse ms-5"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-2">
              <li class="nav-item">
                <a
                  className={activeItem === "home" ? "active nav-link" : "nav-link"}
                  aria-current="page"
                  style={cursorToPointer}
                  smooth={true}
                  duration={300}
                  onClick={scrollToHome}
                >
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={activeItem === "about" ? "active nav-link" : "nav-link"}
                  aria-current="page"
                  style={cursorToPointer}
                  smooth={true}
                  duration={300}
                  onClick={scrollToAbout}
                >
                  About
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={activeItem === "education" ? "active nav-link" : "nav-link"}
                  aria-current="page"
                  style={cursorToPointer}
                  smooth={true}
                  duration={300}
                  onClick={scrollToEducation}
                >
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={activeItem === "skill" ? "active nav-link" : "nav-link"}
                  aria-current="page"
                  style={cursorToPointer}
                  smooth={true}
                  duration={300}
                  onClick={scrollToSkill}
                >
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a
                  className={activeItem === "contact" ? "active nav-link" : "nav-link"}
                  aria-current="page"
                  style={cursorToPointer}
                  smooth={true}
                  duration={300}
                  onClick={scrollToContact}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
