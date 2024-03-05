import React from "react";
import "./../styles/Buttons.css";

export const FilledBlueButton = (props) => {
  return (
    <button type="button" className="btn btn-filled me-3 px-4">
      {props.text}
    </button>
  );
};
