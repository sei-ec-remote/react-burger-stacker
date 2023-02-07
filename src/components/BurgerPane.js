import React from 'react';
import BurgerStack from './BurgerStack';

function BurgerPane (props) {
    return (
        <div>
            <h2>Burger:</h2>
            <BurgerStack burger={props.burger}/>
            <button onClick={props.clear}>Clear</button>
        </div>
    )
}

export default BurgerPane