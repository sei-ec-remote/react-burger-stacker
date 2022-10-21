import React, { Component } from 'react'
import IngredientList from './IngredientList'

class BurgerStack extends Component {
    render() {
        let burgerParts = this.props.ingredients.map(ingredient => 
            <li>
                <IngredientList ingredient={ingredient} />
            </li>)

        return (
            <div>
                <h2>BURGER STACK</h2>
                <ul className='burger'>
                    {burgerParts}
                </ul>
            </div>
        )
    }
}

export default BurgerStack