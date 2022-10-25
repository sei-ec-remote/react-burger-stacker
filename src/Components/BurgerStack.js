import React from 'react'
import IngredientList from './IngredientList'

const BurgerStack = (props) => {
    
    let burgerParts = props.ingredients.map((ing,i) => {
        return(
        <li>
            <IngredientList ingredient={ingredient} />
        </li>)
        })

    return (
        <div>
            <h2>BURGER STACK</h2>
            <ul className='burger'>
                {burgerParts}
            </ul>
        </div>
    )}


export default BurgerStack