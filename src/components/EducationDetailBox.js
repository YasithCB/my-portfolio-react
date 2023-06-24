import React from "react";

export const EducationDetailBox = (props) => {
  return (
    <div className="text-light border border-primary border-2 rounded py-2 px-5 my-2 mx-3">
      <p className="m-1">{props.time}</p>
      <h6 className="m-1">{props.title}</h6>
      <p>{props.desc}</p>
    </div>
  );
};
