import React , { Component } from 'react'
import IngredientRow from './IngredientRow';

class IngredientList extends Component {
    render() {
      const allIngredients = this.props.ingredients.map((thisIngredient) => {
        return (
            <IngredientRow 
                ingredient={thisIngredient}
            />
        )
      })  
      return (
        <div className="ingredient-list">
            <h1 className="section-title">Ingredients</h1>
            <p>
              {allIngredients}
            </p>
        </div>
      );
    }
}
  
  export default IngredientList;