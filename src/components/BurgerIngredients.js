import React from 'react'

const BurgerIngredients = (props) => {


    const burger = props.ingredients.map((ingredient, ind) => (
        <div className='burger' key={ind} style={{backgroundColor: ingredient.color}}>{ingredient.name}</div>
    ))
    return (
        <>
            {burger}
        </>
    )
    
}

export default BurgerIngredients