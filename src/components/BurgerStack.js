import React, { Component } from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

class BurgerStack extends Component {
    
    render() {
        const allIngredients = this.props.ingredients.map(ingredient => {
            return (
                <Ingredient ingredient={ingredient} key={ingredient} />
            )
        })
        return(
            <div className='burger-stack'>
                <h1>Burger Stacking Area </h1>
                <ul>{allIngredients}</ul>
                <ClearBurger clearStack={this.props.clearStack} />
            </div>
        )
    }
}


export default BurgerStack