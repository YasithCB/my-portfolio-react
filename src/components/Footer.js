import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-dark">
      <div className="container text-white d-flex align-items-center">
      <div className="col-6 ">
        <p className="m-0">Copyright 2023 by Yasith C Bandara | All Rights Reserved.</p>
      </div>
      <div className="col-4"></div>
      <div className="col-2">
        <button type="button" className="btn btn-outline-primary my-2 px-4">
          <AiOutlineArrowUp />
        </button>
      </div>
    </div>
    </div>
  );
};

export default Footer;
