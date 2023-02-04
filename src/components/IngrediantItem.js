import React, { Component } from 'react';

class IngrediantItem extends Component {



    render() {
        // console.log(this.props)
        return (
            <li className="ingredientItem" key={this.props.index}>
                <span className="ingrediantName">{this.props.name}</span>
                {/* <span className="ingrediantName">{this.props.color}</span> */}
                <div className="button" id={this.props.index}>Add</div>
            </li>
        )
    }
}

export default IngrediantItem