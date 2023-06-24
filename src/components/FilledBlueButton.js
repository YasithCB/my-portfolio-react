import React from "react";

export const FilledBlueButton = (props) => {
  return (
    <>
      <button type="button" class="btn btn-primary me-3">
        {props.text}
      </button>
    </>
  );
};
