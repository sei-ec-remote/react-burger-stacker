import React, {useState} from "react";

const BurgerPane = (props) =>{
         let burgerIngredients = props.ingredients.map(ing=> (
            <li >
            <p className="burger" style={{backgroundColor: ing.color}}> 
                </p>
          </li>
    ))
            return(
                <div className="column">
                    <h3>Burger Pane</h3>
                    <ul>
                        { burgerIngredients }
                    </ul>
                    <div className="pan"></div>
                    <p>Burger Stacking Area</p>
                    <button onClick={props.clear}>Clear </button>
                </div>
            )
}

export default BurgerPane