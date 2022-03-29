// bring in React and Component instances from React
import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
  let allIngredients = props.ingredients.map((ing, i) => (
    <li key={i} onClick={props.add}>
      <Ingredient itemKey={i} ingredient={ing} />
    </li>
  ))
  console.log('ingreidenits in ingredient list', props.ingredients)
  return (
    <section className="pane">
      <h3>Ingredients List</h3>
      <ul>{allIngredients}</ul>
    </section>
  )
}

export default IngredientList
