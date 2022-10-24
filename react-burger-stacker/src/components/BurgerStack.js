import React, { Component } from 'react';
import Ingredient from './Ingredient';


class BurgerStack extends Component {
    render() {
        let burgerBits = this.props.ingredients.map(ingredient => <li><IngredientList ingredient={ingredient} /></li>)

        return (
            <div>
                <h2>BURGER STACK</h2>
                <ul className='burger'>
                    {burgerBits}
                </ul>
            </div>
        )
    } 
}

export default BurgerStack