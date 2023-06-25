import React from "react";

export const NoFilledBlueButton = (props) => {
  return (
    <>
      <button type="button" className="btn btn-outline-primary me-3 px-4">
        {props.text}
      </button>
    </>
  );
};
