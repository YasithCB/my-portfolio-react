import React from "react";
import { InputField } from "./InputField";
import { CommentBox } from "./CommentBox";
import { NoFilledBlueButton } from "./NoFilledBlueButton";

export const Contact = () => {
  return (
    <div className="container text-light py-3 my-2">
      <h3 className="text-center">Contact Me</h3>
      <div className="row mt-5">
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-4">
          <InputField label="Your Name" type="email" />
          <InputField label="Email Address" type="email" />
          <InputField label="Email Subject" type="text" />
          <InputField label="Mobile Number" type="number" />
        </div>
        <div className="col-12 col-md-4">
          <CommentBox />
        </div>
        <div className="col-12 col-md-2"></div>
      </div>
      <div className="d-flex justify-content-center my-4">
        <NoFilledBlueButton text="Read More" />
      </div>
    </div>
  );
};
