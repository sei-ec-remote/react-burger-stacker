import React, { Component } from 'react'

class BurgerStack extends Component {
    render() {
        console.log(this.)
        const burgerIngredientItems = this.props.burgerIngredients.map(
            (ingredient, index) => {
                return <li key={`burger-ingredient-${index}`}>
                   <img src={ingredient.image} alt={ingredient.name}></img>
                    </li>
            })
        return (
            <>
            <ul className="burger-stack">
                {burgerIngredientItems}
            </ul>
            </>
        )
    }
}

export default BurgerStack