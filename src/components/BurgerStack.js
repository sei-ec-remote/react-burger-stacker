import React, { Component } from 'react'
import Ingredient from './Ingredient'
import ClearBurger from './ClearBurger'

class BurgerStack extends Component {
    // loops over ingredients from props and displays one ingredient component per item
    render() {
        const allIngredients = this.props.ingredients.map((ingredient, index) => {
            return (
                <Ingredient ingredient={ingredient} key={index} clickFunc={this.props.removeFromStack} />
            )
        })
        return(
            <div className='burger-stack'>
                <h1>Burger Stacking Area </h1>
                <div>{allIngredients}</div>
                <ClearBurger clearStack={this.props.clearStack} />
            </div>
        )
    }
}


export default BurgerStack