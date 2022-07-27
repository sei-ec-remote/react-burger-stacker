import React, { Component } from 'react'
import App from './App.js'
import BurgerContainer from './BurgerContainer.js'
import BurgerStack from './BurgerStack.js'
import Ingredients from './Ingredients.js'

// buttons here

class Ingredient extends Component{
    
    render () {

        // I want to render a BG color
        // I want to redner the name of the ing

        // destruct: if ther is a key with this 'name', extract it.
        const { name, color } = this.props.ingredient 

        return (
            // inline styling. key name pair. 
            <p style={{backgroundColor: color}}
                onClick={this.props.clickFunc}
                    id={this.props.itemKey}>
                {name}
            </p>
        )
    }
}



export default Ingredient