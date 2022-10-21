import React, { Component } from 'react'

class Ingredient extends Component {
    // this component recieves one ingredient as a prop and displays said ingredient
    render() {
        const { name, color } = this.props.ingredient
        return(
            <>
                <p style={{backgroundColor: color}} onClick={this.props.clickFunc}>{this.props.ingredient.name}</p>
            </>
        )
    }
}


export default Ingredient