import React, { Component } from "react"
import IngredientsList from "./IngredientsList"

export default class Ingredients extends Component {
    constructor (props) {
        super (props)
        this.state = {
            ingredientsDisplay: this.props.ingredients
        }
    }

    render() {
        console.log("props:", this.props)
        console.log("state:", this.state)
        
        return (            
            <div>
                <h1>Ingredients</h1>
                < IngredientsList ingredients={this.props.ingredients} />
            </div>
        )
    }
}
