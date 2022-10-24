// this is where we're going to display the burger that we are stacking. 
// items clicked in the ingredient list will be added to this component
// since burger pane needs to display ingredients components, we'll import those as well

import React from 'react';
import Ingredient from './components/Ingredient';

const BurgerPane = (props) => {
    
    let burgerbits = props.ingredients.map((ing, i) => (
        // the virtual DOM NEEDS a KEY to identify this
        <li key={i}> 
            <Ingredient 
                itemkey={i}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
    ))
    return (
        <section className='pane'>
            <h3>BURGER PANE</h3>
            <ul>
                {burgerbits}
            </ul>
            <button onClick={props.clear}>Clear Burger</button>
        </section>
    )
    
}
 
export default BurgerPane

