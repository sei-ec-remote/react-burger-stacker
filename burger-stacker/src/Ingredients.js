import React, { Component } from 'react'
import App from './App.js'
import BurgerContainer from './BurgerContainer.js'
import BurgerStack from './BurgerStack.js'
import Ingredient from './Ingredient.js'

// buttons here

class Ingredients extends Component{

    
    render () {

        // implicit return. We are returning JSX, so we need () not {}
        let allIngredients = this.props.ingredients.map((ing, idx)=>(

            // need an unique id for each so app AND us can grab it
            // need parentheses for JSX
            < li key={idx}>
                <Ingredient
                    ingredient={ing}
                    clickFunc={this.props.add}
                    itemKey={idx}
                />

            </li>

        ))
        return (
            <>
            <section>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
            
            </>
        )
    }
}







export default Ingredients