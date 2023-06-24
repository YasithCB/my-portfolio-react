import React from "react";
import { BsFacebook,BsInstagram,BsWhatsapp,BsGithub,BsLinkedin } from 'react-icons/bs';

export const About = () => {
  const myImg = {
    opacity: 0.7,
    transform: "scaleX(-1)",
  };

  return (
    <>
      <div className="container d-flex text-white position-relative py-2 my-1">
        <div className="col-6">
          <img
            src="./images/my-img2.png"
            style={myImg}
            className="img-fluid"
            alt=""
          />
        </div>
        <div className="col-4 align-items-center d-flex">
          <div className="flex-column align-self-center">
            <h3>About Me</h3>
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
          </div>
        </div>
        <div className="col-2 d-flex align-items-center justify-content-center">
          <div className="flex-column">
            <div><BsFacebook /></div>
            <div><BsInstagram /></div>
            <div><BsWhatsapp /></div>
            <div><BsGithub /></div>
            <div><BsLinkedin /></div>
          </div>
        </div>
      </div>
    </>
  );
};
