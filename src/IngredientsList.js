import React, { Component } from "react"

export default class IngredientsList extends Component {
    

    render() {
        const ingredientOptions = this.props.ingredients.map((ingr, i) => {
        return <li key={i}>{ingr.name}</li>
        })
        return (
            <>
                <h4>ingredient options</h4>
                <h4>{ingredientOptions}</h4>
            </>
        )
    }
} 