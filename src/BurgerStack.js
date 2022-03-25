import React, { Component } from 'react'
import BurgerIngredients from './BurgerIngredients'

export default class BurgerStack extends Component {
    render() {
        let allBurgerIngredients = this.props.burgerIngredients.map((ingredient,index)=> {
            return <div key={index}> {ingredient.name},{ingredient.color}  </div>
        })
        return (
            <div>
            <h1>Burger:</h1>
            <ul>
                {allBurgerIngredients}
            </ul>
        </div>
        )
    }
}