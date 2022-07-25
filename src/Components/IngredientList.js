import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = ({ingredients, addToBurger}) => {
  const ingredientMap = ingredients.map((ell, idx) =>{
      return (
          <div className="ing-list-row" key={idx}>
            <Ingredient className="ing-list-comp" ing={ell}/>
            <button className="ing-list-comp" onClick={() =>{
              addToBurger(ell)
          }}>+</button>
          </div>
        
      )
  })
  return (
    <div className="grid-child">
        {ingredientMap}
    </div>
  )
}

export default IngredientList
