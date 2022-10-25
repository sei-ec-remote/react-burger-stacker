// this displays an individual ingredient
import React, { useState} from 'react'


// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = (props) =>  {
    // console.log(props.ingredient)
    const ingredient = props.ingredient
    return (
        <p
            style={{backgroundColor: ingredient.color}}
            id={props.itemKey}
            // add= {props.add = (ingredient) => {}}
            onClick={(e) => {props.clickItem(ingredient)}}
            value = {ingredient}
        >
            {ingredient.name}
        </p>
    )
    
}

export default Ingredient