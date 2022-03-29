// import react component
import React from 'react'
import Ingredient from './Ingredients'


const BurgerPane = (props) => {

    let burgerBits = props.ingredients.map((ing, i) => (
        <li key={i}>
        <Ingredient itemKey={i} ingredient={ing} />
        </li>
    ))

    return(
        <section className="pane">
            <h3>BurgerPane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
}

export default BurgerPane