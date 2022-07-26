import React, { Component } from 'react'
import BurgerStack from './BurgerStack'
import IngredientList from './IngredientList'

class Ingredient extends Component {
    state = {
        burgIng: this.props.burgIng
    }
    addToStack = () => {
        console.log(this.props.burgIng)
        
        this.setState((prevState) => {
            this.props.burgIng.push('hey')
            console.log(this.state)
            return {burgIng: prevState.burgIng}})
    }
    render() {
        return (
            <li>
            <button onClick={this.props.add} style={{backgroundColor: this.props.ingredients.color}}>{this.props.ingredients.name}</button>
            </li>
        )
    }
}

export default Ingredient