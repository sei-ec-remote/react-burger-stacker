import React, { Component } from 'react';

class IngrediantItem extends Component {

    render() {
        const { name, color } = this.props.ingrediant

        return (
            <li className="ingredientItem" key={this.props.index} onClick={this.props.add} >
                <span style={{backgroundColor: `${this.props.color}`}} className="ingrediantName">{this.props.name}</span>
            </li>
        )
    }
}

export default IngrediantItem