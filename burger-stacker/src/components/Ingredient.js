 // this displays individual ingredients
// import React, { Component } from "react"

// recieves one ingredient as a prop, and displays said ingredient
const Ingredient = (props) => {
    // destructure our ingredients properties
    const { name, color } = props.ingredient

    return (
        <p 
            style={{backgroundColor: color}}
            id={props.itemKey}
            onClick={props.clickFunc}
        >
            {name}
        </p>
    )
}

export default Ingredient 