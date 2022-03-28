import React, { useState } from 'react';
import Ingredient from './Ingredient';


const IngredientContainer = (props) => {
        const ingredients = props.ingredients.map((ing, i)=>{
            return <Ingredient ingredient={ing} key={i} addIngredient={props.addIngredient}/>
        })
        return(
        <div className="ingredient-container">
            <p>Ingredients:</p>
            {ingredients}
        </div>
        )
}

export default IngredientContainer