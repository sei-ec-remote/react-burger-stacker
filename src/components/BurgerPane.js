import React from 'react'
import BurgerIngredients from './BurgerIngredients'




const BurgerPane = (props) => {
    return (
        <div className = "container">
            <BurgerIngredients ingredients={props.ingredients} />
            <button onClick={props.clearIngredient}>Clear Burger</button>
            <button onClick={props.removeLastIngredient}>Undo</button>
        </div>
    )
    
}

export default BurgerPane