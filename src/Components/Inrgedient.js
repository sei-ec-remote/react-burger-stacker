import React, { Component } from 'react'
class Ingredient extends Component {
    render() {
        // i want to render a background color
        // i want to render a name of ing
        const {name, color} = this.props.ingredient
        return (
            <p 
                style={{backgroundColor: color}}
                onClick={this.props.clickFunc}
                id={this.props.itemKey}
            >
                {name}  
            </p>
        )
    }
}

export default Ingredient