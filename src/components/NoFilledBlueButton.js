import React from "react";

export const NoFilledBlueButton = (props) => {
  return (
    <>
      <button type="button" class="btn btn-outline-primary me-3">
        {props.text}
      </button>
    </>
  );
};
