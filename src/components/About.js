import React from "react";
import "./../styles/About.css";

export const About = () => {
  const myImg = {
    opacity: 0.92,
    transform: "scaleX(-1)",
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div className="bg-light ">
      <div className="aboutSection container d-flex py-2">
        <div className="col-12 col-md-6 d-flex align-items-center">
          <img src="./images/my-img2.png" style={myImg} className="" alt="" />
        </div>
        <div className="col-12 col-md-4 align-items-center d-flex">
          <div className="flex-column align-self-center">
            <span className="about-text">About</span>{" "}
            <span className="me-text">Me</span>
            <p className="pt-2">
              I'm a dedicated software engineer with a passion for crafting
              exceptional digital solutions. With a strong foundation in
              computer science and a knack for problem-solving, I thrive on
              designing and developing innovative software that enhances user
              experiences. Throughout my career, I have successfully delivered a
              range of projects, showcasing expertise in full-stack development
              and application architecture. I'm a collaborative team player,
              always seeking to deliver robust, scalable, and high-quality code.
              Let's create remarkable software together.
            </p>
            <p className="py-3">Also I am,</p>
            {/* t4me details */}
            <div className="d-flex">
              <p>Owner @ T4Me Apparel & Printers</p>
              <img src="icons/fb.png" className="social-icons" alt="#" />
              <img src="icons/google.png" className="social-icons" alt="#" />
              <img src="icons/drz.png" className="social-icons" alt="#" />
              <img src="icons/insta.png" className="social-icons" alt="#" />
            </div>
            {/* motion graphics details */}
            <div className="d-flex">
              <p>Owner @ Motion Graphics</p>
              <img src="icons/fb.png" className="social-icons" alt="#" />
            </div>
          </div>
        </div>
        <div className="col-12 col-md-2 d-flex align-items-center justify-content-center">
          <div className="flex-column">
            <div className="mb-2">
              <img src="icons/fb.png" alt="#" />
            </div>
            <div className="mb-2">
              <img src="icons/insta.png" alt="#" />
            </div>
            <div className="mb-2">
              <img src="icons/wa.png" alt="#" />
            </div>
            <div className="mb-2">
              <img src="icons/git.png" alt="#" />
            </div>
            <div className="mb-2">
              <img src="icons/li.png" alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
