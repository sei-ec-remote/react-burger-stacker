import React, { useState } from 'react'
import Ingredient from './Ingredient'


const BurgerPane = (props) => {
        // console.log('ingred in burger pane',this.props.ingredients)
        let burgerBits = props.ingredients.map((ing,index) => (
            <li>
                <Ingredient itemKey = {index} ingredient={ing} clickFunc={props.remove}/>
            </li>
        ))

        return (
            <section className='pane'>
                Burger Pane
                <ul>
                    {burgerBits}
                </ul>
                <button onClick={props.clear}>Clear Burger</button>
            </section>
        )
    }

export default BurgerPane