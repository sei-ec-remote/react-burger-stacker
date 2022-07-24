import React, { Component } from 'react'
import IngredientList from './IngredientList'

class BurgerStack extends Component {
    render() {
        //let burgerBits = this.props.ingredients.map(ingredient => <li><IngredientList ingredient={ingredient} /></li>)

        return (
            <div>
                <h2>BURGER STACK</h2>
                <ul className='burger'>
              
                </ul>
            </div>
        )
    }
}

export default BurgerStack