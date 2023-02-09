// this will loop over an array of ingredients, that were added by clicking each ingredient in the ingredientList

import React, { Component } from "react"
// since Ingredient is a reusable component, we can import that too
import Ingredient from "./Ingredient"

export default class MyBurger extends Component {
    render () {
        let burgerBits = this.props.ing.map((ing, i) => (
                <Ingredient 
                    key={i}
                    ingredient={ing}
                    clickFunc={this.props.remove}
                />
        ))

        return (
            <section className='pane'>
                <h3>My Burger</h3>
                <ul>
                    { burgerBits }
                </ul>
                <button onClick={this.props.reset}>Toss Burger</button>
            </section>
        )
    }

}