import React from "react";
import { EducationDetailBox } from "./EducationDetailBox";

export const Education = () => {
  return (
    <div className="container text-light py-3 my-2">
      <h3 className="text-center">My Journey</h3>
      <div className="d-flex mt-5">
        <div className="text-center col-6">
          <h5 className="mb-3">Education</h5>
          <EducationDetailBox
            time="2017"
            title="GCE Ordinary Level"
            desc="I have done my GCE O/L Exam at Sivali Central Collage Ratnapura and i have obtained A9 result."
          />
          <EducationDetailBox
            time="2017 - 2020"
            title="GCE Advanced Level"
            desc="i have completed my GCE A/L at R/ Sivali Central Collage in Mathematics Scheme with ICT."
          />
          <EducationDetailBox
            time="2021 - Present"
            title="BSc (Hons) in Computer Science"
            desc="I am curruntly following a degree program in Computer Science via GDSE(Graduated Diploma in Software Engineering) in IJSE(Institute of Software Engineering)"
          />
        </div>
        <div className="text-center col-6">
          <h5 className="mb-3">Experience</h5>
          <EducationDetailBox
            time="2019 - Present"
            title="Graphic Designer - freelancer"
            desc="I have a 4 year+ experience in graphic designing and i am the owner of Motion Graphics"
          />
          <EducationDetailBox
            time="2019 - Present"
            title="Web Developer - freelancer"
            desc="I have developed 5+ completed software projects "
          />
        </div>
      </div>
    </div>
  );
};
