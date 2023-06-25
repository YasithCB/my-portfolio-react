import React from "react";
import { SkillDetalsBox } from "./SkillDetalsBox";

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

  return (
    <div className="container text-light py-5 my-2">
      <h3 className="text-center">My Skills</h3>
      <div className="d-flex text-center mt-5">
        <div className="col-4">
          <h6>Frontend</h6>
          <SkillDetalsBox array={frontend} />
        </div>
        <div className="col-4">
          <h6>Backend</h6>
          <SkillDetalsBox array={backend} />
        </div>
        <div className="col-4">
          <h6>Databases/ Mobile & Other</h6>
          <SkillDetalsBox array={db} />
        </div>
      </div>
    </div>
  );
};
