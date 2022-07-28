import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
    
	const ingredientsPicked = props.ingredients.map((ing,idx) => (
    <li key={idx}>
        <Ingredient 
            itemKey={idx}
            ingredient={ing}
            clickFunc={props.remove}
        />
    </li>
))
return (
    <div>
        <h3>Burger Pane</h3>
        <ul>
            {ingredientsPicked}
        </ul>
        <button onClick={props.clear}>Clear Burger</button>
    </div>
);

}

export default BurgerPane