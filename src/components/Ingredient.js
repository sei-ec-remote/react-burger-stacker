// this displays an individual ingredient
import React, { Component } from 'react'

// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = () => {
    const { name, color } = this.props.ingredient

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

export default Ingredient