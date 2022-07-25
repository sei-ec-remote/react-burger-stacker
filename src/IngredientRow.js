import React , { Component } from 'react'

class IngredientRow extends Component {
    render() {
      const thisIngredient = this.props.ingredient.name
      return (
        <div className="ingredient-row">
            <h6>
                {thisIngredient}
            </h6>
        </div>
      );
    }
}
  
export default IngredientRow;