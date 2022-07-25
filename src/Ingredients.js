import React, { Component } from 'react';
import IngredientRow from './IngredientRow';

// As a user, I want to see all available burger ingredients listed on the left side.
// I want the ability to add any ingredient onto the burger stack using a button.

class Ingredients extends Component {
    render() {
                return (
            <div class="container">
                <IngredientRow 
                    ingredients={this.props.ingredients}
                    onChange = {this.props.onChange} 
                />
                <p>Click the ingredients above to add them to the burger!</p>
                </div>
        );
    }
}

export default Ingredients;
