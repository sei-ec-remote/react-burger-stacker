import React from 'react'

// Ingredient creates each ingredient for the display and sets up a
//  click event to addIngredientToBurger - an array.   It will also
//  display the ingredient.name.  Each ingredient is also given the
//  style color that was part of the ingredients array.
export default function Ingredient (props) {
    return (
        <div className='ingredient' 
                style={{'backgroundColor': props.ingredient.color}}
                onClick={()=>{ props.addIngredientToBurger(props.ingredient) }} 
        >
            <p>{props.ingredient.name}</p>
        </div>
    )
}