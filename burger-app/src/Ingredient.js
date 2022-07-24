import React, { Component } from 'react'

class Ingredient extends Component {
    addToStack = () => {
        
    }
    render() {
        return (
            <button style={{backgroundColor: this.props.ingredients.color}}>{this.props.ingredients.name}</button>
        )
    }
}

export default Ingredient