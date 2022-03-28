import React, { Component } from 'react';


const Ingredient= (props) => {
        return(
            <div>
                <button className='ingredient' onClick={props.addIngredient} style={{backgroundColor: props.ingredient.color}}>{props.ingredient.name}</button>
            </div>
        )
}

export default Ingredient