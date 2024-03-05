import React from "react";
import { InputField } from "./InputField";
import { CommentBox } from "./CommentBox";
import { FilledBlueButton } from "./FilledBlueButton";

export const Contact = () => {
  return (
    <div className="bg-light">
      <div className="container py-3">
      <div className="d-flex justify-content-center">
          <span className="my-title">Contact_</span>
          <span className="my-title my-primary-color">Me</span>
        </div>
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
        <FilledBlueButton text="Send Now" />
      </div>
    </div>
    </div>
  );
};
