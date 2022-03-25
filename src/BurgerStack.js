import React, { Component } from 'react'
import Ingredient from './Ingredient'
import './index.css'

export default class BurgerStack extends Component {
    render () {
        let burgerIngredients = this.props.burgerIngredients.map((item, i) => (
            <li key={i}>
                <Ingredient ingredient={item.name} color={item.color}/>
            </li>
        ) )
        return (
            <div>
                <ul>
                    {burgerIngredients} 
                </ul>
            </div>
        )
    }
}