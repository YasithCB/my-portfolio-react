import React from 'react';
import {FilledBlueButton} from './FilledBlueButton';
import {NoFilledBlueButton} from './NoFilledBlueButton';

export default function Home() {
  return (
    <>
      <div>
        <div className="container d-flex align-items-center">
          <div className="col-12 col-md-6 text-center text-light">
            <h3>Hi, I'm Yasith C Bandara</h3>
            <h5 className="text-primary">Fullstack Developer</h5>
            <div className="mt-3">
              <FilledBlueButton text="Hire Me" />
              <NoFilledBlueButton text="Let's talk" />
            </div>
          </div>
          <div className="col-12 col-md-6 mt-4">
            <img
              src="./images/my-img-home.png"
              className="img-fluid"
              alt="Yasith_C_Bandara"
            />
          </div>
        </div>
      </div>
    </>
  );
}
