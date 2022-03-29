import React, {useState, useEffect} from "react";
import Ingredient from "./Ingredient";
import IngredientList from "./IngredientList";

const BurgerPane = (props) => {


let burgerBits = props.ingredients.map((ing, index) =>(
    <li key={index}>
    <Ingredient itemKey={index} ingredient={ing} clickFunc={props.remove}/>
    </li>
))
    return(
        <section className="pane">
        <h3>B Pane</h3>
        <ul>
            {burgerBits}
        </ul>
        <button onClick={props.clear}> Clear Burger</button>
        </section>
    )



}

export default BurgerPane