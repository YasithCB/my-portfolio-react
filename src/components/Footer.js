import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container d-flex flex-column flex-md-row align-items-center">
        <div className="col-md-6 ">
          <p className="m-0 text-white my-small-text">
            Copyright 2023 by Yasith C Bandara | All Rights Reserved.
          </p>
        </div>
        <div className="col-md-4"></div>
        <div className="col-md-2 text-center">
          <button type="button" onClick={() => {scroll.scrollTo(0)}} className="btn btn-outline-primary my-2 px-4">
            <AiOutlineArrowUp />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
