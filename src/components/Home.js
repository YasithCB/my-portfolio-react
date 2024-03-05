import React from "react";
import { FilledBlueButton } from "./FilledBlueButton";
import { NoFilledBlueButton } from "./NoFilledBlueButton";
import "./../styles/Home.css";

export default function Home() {
  return (
    <div className="bg-light">
      <div className="container home-container d-flex align-items-center">
        <div className="col-12 col-md-6">
          <h3 className="my-name">Hi, I'm Yasith C Bandara</h3>
          <h5>Fullstack Developer</h5>
          <div className="mt-3">
            <FilledBlueButton text="Hire Me" />
            <NoFilledBlueButton text="Let's talk" />
          </div>
        </div>
        <div className="img-container col-12 col-md-6 mt-4">
          <img
            src="./images/home-shpe-grey.png"
            className="img-grey"
            alt=""
            style={{ opacity: "0.3" }}
          />
          <img
            src="./images/home-shape-1.png"
            className="img-pink"
            alt=""
            style={{ opacity: "0.5" }}
          />
          <img src="./images/my-img-home.png" className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
}
