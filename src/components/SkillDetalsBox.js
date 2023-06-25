import React from 'react'

export const SkillDetalsBox = (props) => {
    const array = props.array;

    const printArray = array.map((element) => {
        return <h6>{element}</h6>
    })

  return (
    <div className="text-light border border-primary border-2 rounded py-3 px-5 my-2 mx-3">
      {printArray}
    </div>
  )
}
