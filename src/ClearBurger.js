import React from 'react';

// ClearBurger sets up the button with the function that gets called when
//    it is clicked. 
export default function ClearBurger (props) {
    return (
        <button onClick={props.clearBurgerIngredients}>Clear</button>
    );
}