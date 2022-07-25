import React from 'react'

const Ingredient = ({ing}) => {
  if(ing.name !== "Onion"){
    return (
    
        <div style={{color: 'white', background: ing.color}}>
          {ing.name}
        </div>
      )
  }
  else{
    return (
    
        <div style={{color: 'grey', background: ing.color}}>
          {ing.name}
        </div>
      )
  }
  
}

export default Ingredient
