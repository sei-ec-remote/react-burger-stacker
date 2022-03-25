import React, { Component } from "react"

export default class Ingredient extends Component {
    render () {
        return (
            <p>{this.props.ingredient.name}</p>
        )
    }
}