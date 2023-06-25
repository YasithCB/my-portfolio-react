import React from "react";
import { NoFilledBlueButton } from "./NoFilledBlueButton";
import { FilledBlueButton } from "./FilledBlueButton";

export default function Home() {
  const shapeHome = {
    opacity: 0.25,
    top: 50,
    zIndex: 1,
  };
  const grayShapeHome = {
    opacity: 0.25,
    top: 90,
    zIndex: 1,
    transform: "rotate(45deg)",
  };

  return (
    <>
      <div>
        <div className="container d-flex justify-content-center mt-5">
          <div className="col-2"></div>
          <div
            className="col-4 align-items-center d-flex"
            style={{ height: 500 }}
          >
            <div className="flex-column align-self-center text-light">
              <h3>Hi I'm Yasith C Bandara</h3>
              <h5 className="text-primary">Fullstack Developer</h5>
              <div>
                <div className="">
                  <FilledBlueButton text="Hire Me" />
                  <NoFilledBlueButton text="Let's talk" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-4 text-white position-relative">
            <img
              src="./images/my-img-home.png"
              style={{ zIndex: 2 }}
              className="img-fluid position-absolute"
              alt=""
            />
            <img
              src="./images/blue-shape-home.png"
              style={shapeHome}
              className="img-fluid position-absolute"
              alt=""
            />
            <img
              src="./images/gray-shape-home.png"
              style={grayShapeHome}
              className="img-fluid position-absolute"
              alt=""
            />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </>
  );
}
