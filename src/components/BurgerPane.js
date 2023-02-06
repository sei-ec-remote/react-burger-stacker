import React, { Component } from 'react'
import BurgerStack from './BurgerStack'

function BurgerPane(props) {
    // Render the clear burger button component and the burger ingredients
    return (
        <>
            <div className='burger-pane'>
                <BurgerStack burgerIngredients={props.burgerIngredients} smash={props.smash} />
            </div>
        </>
        )
}

export default BurgerPane