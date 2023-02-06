import React, { Component, useState } from 'react';

class IngrediantItem extends Component {

    render() {
        
        return (
            <li className="ingredientItem" key={this.props.index}>
                <span className="ingrediantName">{this.props.name}</span>
                <button className="button" id={this.props.index} onClick={this.addToStack}>Add</button>
            </li>
        )
    }
}

export default IngrediantItem