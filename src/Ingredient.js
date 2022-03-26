import React, { Component } from "react"

// It's just going to display one ingredient.
// Ingredient is a child of Ingredient List and receives the props of an individual ingredient -> color and name.

export default class Ingredient extends Component {
    render () {
        // console.log("props in each ingredient:", this.props.ingredient)
        const { name, color } = this.props.ingredient   // Deconstruct the object so we can just use the name as in below console.logs
        // console.log("name in each ingr:", name)
        // console.log("color in each ingr:", color)
        return (
            <p
                style={{backgroundColor: color}}
                id={this.props.itemKey}
                onClick={this.props.clickFunc}
            >
                {name}
            
            </p>
        )
    }
}