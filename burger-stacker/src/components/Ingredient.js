import React from 'react'

const Ingredient = (props) => {
    // render bg color of ing
    // render name of ing
    const { name, color } = props.ingredient
    return (
      <p
        style={{backgroundColor: color}}
        onClick={props.clickFunc}
        id={props.itemKey}
      >
        { name }
      </p>
    )
  
}
export default Ingredient