// Ingredient is a child of Ingredient list
// receives the props of an individual ingredient

// bring in React and Component instances from React
import React from 'react'

const Ingredient = (props) => {
  const { name, color } = props.ingredient
  return <p style={{ backgroundColor: color }}>{name}</p>
}

export default Ingredient
