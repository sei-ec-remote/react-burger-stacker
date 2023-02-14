// this displays individual ingredients
import React, { Component } from "react"

// recieves one ingredient as a prop, and displays said ingredient
 class Ingredient extends Component {
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
export default Ingredient