import React, { Component } from 'react'
import App from './App.js'
import Ingredients from './Ingredients.js'
import BurgerStack from './BurgerStack.js'
import ClearBurger from './ClearBurger.js'
import Ingredient from './Ingredient.js'

class BurgerContainer extends Component{
    

    render() {
        let burgerBits = this.props.ingredients.map((ing, idx) => (
            <li key={idx}>
                <Ingredient
                    itemKey={idx}
                    ingredient={ing}
                    clickFunc={this.props.remove}
                
                />
                    </li>
        ))
        
        return (
            <section>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={this.props.clear}>Clear Burger</button>
        </section>

        )
    }
}


// !!!!!!!!!!!
export default BurgerContainer