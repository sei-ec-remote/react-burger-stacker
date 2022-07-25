import React from 'react'
import Ingredient from './Ingredient'

const BurgerStack = ({ingredients}) => {
  let myBurger = ingredients.map((ell, idx) =>{
      return <Ingredient ing={ell} key={idx} />
  })
  return (
    <div>
      {myBurger}
    </div>
  )
}

export default BurgerStack
