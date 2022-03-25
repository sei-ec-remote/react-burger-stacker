import React, { Component } from 'react'
import './App.css';
import Ingredients from './Ingredient';
import IngredientList from './IngredientList';

export default class BurgerPane extends Component {
    constructor() {
        super()
    }
    render () {
        return (
            <div>
                <h1>BurgerPane</h1>
                <button
                onClick={this.clear}
                >New Hamburger</button>
            </div>
        )
    }
}