import React, { Component } from 'react';
import Ingredient from './Ingredient';


export default class IngredientContainer extends Component {
    render(){
        const ingredients = this.props.ingredients.map((ing, i)=>{
            return <Ingredient ingredient={ing} key={i} addIngredient={this.props.addIngredient}/>
        })
        return(
        <div className="ingredient-container">
            <p>Ingredients:</p>
            {ingredients}
        </div>
        )
    }
}