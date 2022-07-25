import React , { Component } from 'react'
import IngredientRow from './IngredientRow';

class IngredientList extends Component {
    render() {
      const allIngredients = this.props.ingredients.name.map((thisIngredient) => {
        return (
            <IngredientRow 
                ingredient={thisIngredient}
            />
        )
      })  
      return (
        <div className="ingredient-list">
            <h1 className="section-title">Ingredients</h1>
            <h1>
                {allIngredients}
            </h1>
        </div>
      );
    }
}
  
  export default IngredientList;