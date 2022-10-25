import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
    console.log('these are the burgerPane props', props.ingredients)
    let burgerParts = props.ingredients.map((ing, i) => (
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
            <h1>BURGER PANE</h1>
            <ul>
                {burgerParts}
            </ul>
            <button onClick={props.clear}>Clear Burger</button> 
            
                
        </section>
    )
    
}

export default BurgerPane