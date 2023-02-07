import React, { Component } from 'react';

class IngrediantItem extends Component {

    render() {
        const { name, color } = this.props.ingrediant

        return (
            <li className="ingredientItem" key={this.props.index} onClick={this.props.add} >
                <span className="ingrediantName">{this.props.name}</span>
                {/* <button className="button" id={this.props.index} onClick={this.props.addToStack}>Add</button> */}
            </li>
        )
    }
}

export default IngrediantItem