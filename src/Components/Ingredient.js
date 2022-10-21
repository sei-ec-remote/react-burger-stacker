import React, { Component } from 'react'

class Ingredient extends Component {
    render() {
        return (
            <p 
                style={{backgroundColor: this.props.ingredient.color}}
                itemkey={this.props.itemkey}
                onClick={this.props.clickFunc}
            >
                {this.props.ingredient.name}
            </p>
        )
    }
}

export default Ingredient