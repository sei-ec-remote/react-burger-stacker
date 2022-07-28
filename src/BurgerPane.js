import React from 'react';
import Ingredient from './Ingredient';

const BurgerPane = (props) => {
    // map over all the added burger bits
    // still going to use the Ingredient component that we created
    // we WILL need to pass down the ingredient ID
    let burgerBits = props.ingredients.map((ing,idx) => (
        <li key={idx}>
            <Ingredient 
                itemKey={idx}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))
    return (
        <div class='sideBySide'>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <div id="clearBurger">
                <button onClick={props.clear}>Clear Burger</button>
            </div>
        </div>
    );

}

export default BurgerPane;
