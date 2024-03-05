import React from 'react'
import "./../styles/Text.css";

export const SkillDetailsBox = (props) => {
  const array = props.contentArray;

  const printArray = array.map((element, index) => (
      <h6 className='subtitle text-center' key={index}>{element}</h6>
  ));

  return (
      <div className="text-light border border-my-primary border-2 rounded py-3 px-5 my-2 mx-3">
          {printArray}
      </div>
  );
};

