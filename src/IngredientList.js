import React, { setEffect, useEffect } from "react";
import Ingredient from "./Ingredient";
export default function IngredientList (props) {
  
    let allIngredients = props.ingredients.map((ing, i) =>( 
      <li key={i} onClick={props.addIngs}>
        <Ingredient itemKey={i} ingredient= {ing}/>
      </li>
    ))
    return (
      <section className="pane">
        <h2>Ingredient list</h2>
        <ul>
            {allIngredients}
        </ul>
      </section>
      )
  
} 