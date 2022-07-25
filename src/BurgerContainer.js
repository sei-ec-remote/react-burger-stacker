import React, { Component } from 'react';
import Ingredients from './Ingredients';
import BurgerStacker from './BurgerStacker';

class BurgerContainer extends Component {
    state = {
        ingredientsToDisplay: this.props.filteredIngredientList,
        // we want to click a button which will add that ingredient to the display Array
    }
    // handle ingredientChange function which we will pass down to ingredients
    handleIngredientChange = (e) => {
            // we want the filter to use the button VALUE as the filter function
            console.log(e.target.value)
            // and filter the ingredients list using that value
            // and concat to return new array and assign that to the state variable
    }
    // render
    render() {
        return (
            <div className="App">
                <Ingredients 
                    ingredients={this.props.ingredients} 
                    onChange={this.handleIngredientChange}
                />
                <BurgerStacker 
                    displayIngredients={this.state.ingredientsToDisplay}
                />
            </div>
        );
    }
}

export default BurgerContainer;
