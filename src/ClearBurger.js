import React, { Component } from 'react';

class ClearBurger extends Component {
    render() {
        return (
            <div>
                <div class="button">
                    <button onClick={this.props.removeLast}>Oops! Remove Last Ingredient</button>
                </div>
                <div class="button">
                    <button onClick={this.props.onClick}>Remove All Ingredients</button>
                </div>
            </div>
        );
    }
}

export default ClearBurger;
