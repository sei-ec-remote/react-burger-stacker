import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <p style={{backgroundColor: this.props.ingredient.color}}>{this.props.ingredient.name}</p>
        )
    }
}

export default Ingredient