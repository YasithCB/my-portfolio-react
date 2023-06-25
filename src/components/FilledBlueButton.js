import React from "react";

export const FilledBlueButton = (props) => {
  return (
    <button type="button" className={`btn btn-primary me-3 px-4`}>
      {props.text}
    </button>
  );
};
