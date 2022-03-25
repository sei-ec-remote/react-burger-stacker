import React, { Component } from 'react'
import './App.css';
import Ingredients from './Ingredient';
import BurgerPane from './BurgerPane';

export default class IngredientList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            ingredientsToDisplay: this.props.ingredients
        }
    }
    addIngredient = () => {
        this.setState(
            console.log('hello')
        )
    }
    // onClick={addIngredient}
    render () {
        let foods = this.state.ingredientsToDisplay.map((f,i) => {
            return <p key={i} ><Ingredients ingredients = {f}/></p>
        })
        return (
            <div>
                <h1>Ingredient List</h1>
                {foods}
            </div>
        )
    }
}