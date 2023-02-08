import React, { Component } from "react"

//this receives one ingredient as a prop, and displays said ingredient
export default class Ingredient extends Component {
    render () {
        // destructure our ingredients properties
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
}