import React, { Component } from "react";


const Ingredient = (props) => {
    const { name, color } = props.ingredient
    const id = props.itemKey
    return (
        <li key={id} style={{ backgroundColor: color }} onClick={props.clickFunc}>{name}</li>
        
    )
}


export default Ingredient
