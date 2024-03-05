import React from "react";
import { SkillDetailsBox } from "./SkillDetalsBox";
import "./../styles/Skills.css";

export const Skills = () => {
  const frontend = [
    "React.js",
    "Bootstrap",
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
  ];
  const backend = [
    "Spring",
    "SpringBoot",
    "Java",
    "Python",
    "Node.js",
    "Express.js",
  ];
  const db = ["MySQL", "MongoDB", "React Native", "OOP", "Hibernate", "Git"];
  const graphicDesign = ["Adobe Photoshop", 'Adobe Illustrator'];

  return (
    <div className="bg-light">
      <div className="container py-5">
        {/* software dev skills */}
        <div className="d-flex justify-content-center">
          <span className="my-title">Software_Development_</span>
          <span className="my-title my-primary-color">Skills</span>
        </div>
        <div className="row mt-5">
          <div className="col-12 col-md-4">
            <h6 className="text-center subtitle">Frontend</h6>
            <SkillDetailsBox contentArray={frontend} />
          </div>
          <div className="col-12 col-md-4">
            <h6 className="text-center subtitle">Backend</h6>
            <SkillDetailsBox contentArray={backend} />
          </div>
          <div className="col-12 col-md-4">
            <h6 className="text-center subtitle">Databases/ Mobile & Other</h6>
            <SkillDetailsBox contentArray={db} />
          </div>
        </div>


        {/* graphic design skills */}
        <div className="d-flex justify-content-center mt-5">
          <span className="my-title">Graphics_Design_</span>
          <span className="my-title my-primary-color">Skills</span>
        </div>
        <div className="row mt-5 justify-content-center">
          <div className="col-12 col-md-6">
            <SkillDetailsBox contentArray={graphicDesign} />
          </div>
        </div>
      </div>
    </div>
  );
};
