import React, { Component } from 'react';
import BurgerStackingArea from './BurgerStackingArea';
import ClearBurger from './ClearBurger';

// I want to see each ingredient I select added to the top of the burger stack on the right side.
// I want the ability to clear the burger stack so I can start again.
// I want to be able to add as many ingredients of any type as I want (ingredients don't go away.)

class BurgerStacker extends Component {
    render() {
        return (
            <div class="container">
                <BurgerStackingArea 
                    displayIngredients={this.props.displayIngredients}
                />
                <ClearBurger />
            </div>
        );
    }
}

export default BurgerStacker;
