import React, {useState} from "react"

const ClearBurger = (props) => {

  return (
    <>
      <button onClick={props.clearStack}>Clear</button>
    </>  
  )

}

export default ClearBurger