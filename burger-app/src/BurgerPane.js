import React from 'react'
import Ingredient from './Ingredient'

const BurgerPane = (props) => {
 
    let burgBits = props.ingredients.map((ing, index) => (
        <li key={index}>
            <Ingredient 
                itemKey={index}
                ingredient={ing}
                clickFunc={props.remove}
            />
        </li>
        ))
    return (
      <section>
          <h3>Burger Pane</h3>
          <ul>
              {burgBits}
          </ul>
          <button onClick={props.clear}>Clear Burger</button>
      </section>
    )
  
}

export default BurgerPane
