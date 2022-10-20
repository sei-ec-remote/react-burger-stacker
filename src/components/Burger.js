import React from 'react'
import BurgerItem from './BurgerItem'
import Clear from './Clear'

  const Burger = (props) => {
    const {ingredients, clearHandler} = props
    const ingredientsJSX = ingredients.map((ingredient,index) => {
        const key = `${ingredient.name}-${index}`
        return (
            <BurgerItem ingredient={ingredient} key={key} />
        )
    })
    return (
        <>
            <div className="stacking-area">
                <Clear clearHandler={clearHandler} />
                {ingredientsJSX}
            </div>
            
        </>
    )
    
}

export default Burger 