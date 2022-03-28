import React, { useState } from "react";
import Ingredient from "./Ingredient";

export default function BurgerPane (props) {
  
    let burgerBits = props.ingredients.map((ing, i) => (
      <li>
        <Ingredient itemKey={i} ingredient={ing}/>
        </li>
    ))
    return (
      <section className="pane">
        <h2>BurgerPane</h2>  
        <ul>
          {burgerBits}
        </ul>
        <button onClick={props.clear}>Destroy Burger</button>
      </section>
    )
  
} 