import React, { Component } from 'react'
import IngrediantContainer from './IngrediantContainer'

const BurgerIngrediant = (props) => {

    const { name, color } = props.ingrediant

    return (
        <>
            <div className="burgerIngrediant">
                <li 
                    className="ingredientItem" 
                    key={props.index} 
                    onClick={props.remove}
                    style={{backgroundColor: `${color}`}} 
                >
                    <span className="ingrediantName">{name}</span>
                </li>
            </div>
        </>
    )

}

export default BurgerIngrediant