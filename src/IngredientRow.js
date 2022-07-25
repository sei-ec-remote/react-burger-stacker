import React , { Component } from 'react'

class IngredientRow extends Component {
    render() {
      const thisIngredient = this.props.ingredient.name
      return (
        <div className="ingredient-row">
            <>
                {thisIngredient}
                {' '}
            </>
            <button>+</button>
        </div>
      );
    }
}
  
export default IngredientRow;