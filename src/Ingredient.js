import React, { Component } from 'react'

export default class Ingredient extends Component {
    render () {
        // grabbing name and color from ingredients and giving it a variable
        const { name, color } = this.props.ingredients
        return (
                <p style={{backgroundColor: color}}>{name}</p>
        )
    }
}