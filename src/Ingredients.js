import React, { Component } from 'react';
import IngredientRow from './IngredientRow';

// As a user, I want to see all available burger ingredients listed on the left side.
// I want the ability to add any ingredient onto the burger stack using a button.

class Ingredients extends Component {
    render() {
        return (
            <div class="container">
                <IngredientRow />
                <p>This container will hold the list of ingredients in rows</p>
            </div>
        );
    }
}

export default Ingredients;
