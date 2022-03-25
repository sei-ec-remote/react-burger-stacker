import React, { Component } from 'react';

// ClearBurger sets up the button with the function that gets called when
//    it is clicked.  It is passed into ClearBurger via props.
export default class ClearBurger extends Component {
    state = {  } 
    render() { 
        return (
            <button onClick={this.props.clearBurgerIngredients}>Clear</button>
        );
    }
}