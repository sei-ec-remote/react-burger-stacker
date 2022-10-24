import React from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

const BurgerStack = ({ ingredients, clearStack}) => {
    
    const allIngredients = ingredients.map((ingredient, index) => {
        return (
            <Ingredient ingredient={ingredient} key={index} />
        )
    })
    return (
        <div className='burger-stack'>
            <h1>Burger Stacking Area </h1>
            <div>{allIngredients}</div>
            <ClearBurger clearStack={clearStack} />
        </div>
    )
}



export default BurgerStack