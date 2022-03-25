import React, { Component } from 'react'
import Ingredients from './Ingredients'
import BurgerIngredients from "./BurgerIngredients"
import BurgerStacker from "./BurgerStacker"

export default class IngredientList extends Component {
    constructor(props){
        super(props)
        this.state = {
            ingredientDisplay: this.props.ingredients
        }
    }

    render(){
        console.log("props in ingredients:", this.props)
        console.log("state in ingredients:", this.state)
        return (
        <>
            <h3>Ingredient List</h3>
            <Ingredients ingredients={this.state.ingredientDisplay}/>
            <BurgerStacker/>
            <BurgerIngredients ingredients={this.state.ingredientDisplay}/>
        </>
        )
    }
}