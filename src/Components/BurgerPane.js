import React from 'react'
import Ingredients from './Ingredients'


const BurgerPane=(props)=>{
    
   // map over all the added burger bits
   // still going to use the Ingredients Components
   // let burgerBits = this.props.ingredients.map((ing, index)=>((
    let burgerBits = props.ingredients.map((ing, index)=>((
        <li key={index}>
            <Ingredients
                itemKey={index}
                ingredient={ing}
                clickFunction={props.remove}
            />
        </li>

    )))

    return(
        <section>
            <h3> Burger Pane </h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane
