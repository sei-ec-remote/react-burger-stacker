//this is where the burger happens 

import React, {Component} from 'react';
import Ingredient from'./Ingredient' 
export default function BurgerPane (props) {

        let burgerBits = props.ingredients.map((ing, i) => (
            <li>
            <Ingredient itemKey={i} ingredient={ing}/>
            </li>
              ))

        return(

            <section className="pane">
            <ul> 
                {burgerBits}
            </ul>    
             <h3>burger pane</h3>
             <button onClick={props.clear}>Clear Burger</button>
             </section> 
        )
    }
