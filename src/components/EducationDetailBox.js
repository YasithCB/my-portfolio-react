import React from "react";

export const EducationDetailBox = (props) => {
  return (
    <div className="text-light education-box py-2 px-5 my-2 mx-3">
      <p className="m-1 mt-3">{props.time}</p>
      <h6 className="m-1">{props.title}</h6>
      <p className="m-1 mb-3">{props.desc}</p>
    </div>
  );
};
