import React, { Component } from "react"

export default class IngredientsList extends Component {
    

    render() {
        const ingredientOptions = this.props.ingredients.map((ing, i) => {
        return <li key={i}>{ing.name}</li>
        })
        return (
            <>
                <h4>ingredient options</h4>
                <h4>{ingredientOptions}</h4>
            </>
        )
    }
} 