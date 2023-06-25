import { Link, animateScroll as scroll } from "react-scroll";

export default function Header() {
  const scrollToHome = () => {
    scroll.scrollTo(0);
  };
  const scrollToAbout = () => {
    scroll.scrollTo(800);
  };
  const scrollToEducation = () => {
    scroll.scrollTo(1500);
  };
  const scrollToSkill = () => {
    scroll.scrollTo(2150);
  };
  const scrollToContact = () => {
    scroll.scrollTo(2550);
  };
  const reload = () => {
    window.location.reload()
  };

  const cursorToPointer = {
    cursor: 'pointer'
  }


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
                  class="nav-link active"
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
                  class="nav-link"
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
                  class="nav-link"
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
                  class="nav-link"
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
                  class="nav-link"
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
