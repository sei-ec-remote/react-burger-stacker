import React, {useState} from "react";

const IngredientList = (props) => {
  
    let Ingredients = props.Ingredients.map(ing => (
      <li >
        <p className="ingredient" style={{backgroundColor: ing.color}} onClick={props.add}> 
            {ing.name} 
            </p>
      </li>
    ))
    return (
      <div className="column">

        <h3> Ingredient List</h3>
        <ul>
          {Ingredients}
        </ul>
      </div>
    )

  }

export default IngredientList