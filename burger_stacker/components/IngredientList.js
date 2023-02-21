import React from "react"
import Ingredient from "./ingredient"

const IngredientList = (props) => {
 
    let allIngredients = props.allIngredients.map((ing, i) => (
      <li key={i}>
        <Ingredient
          ingredient={ing}
          itemKey={i}
          clickFunc={this.props.add}
        />
      </li>
    ))
    return (
      <section className="pane">

        <h3> Ingredient List</h3>
        <ul>
          {allIngredients}
        </ul>
      </section>
    )

  
}
export default IngredientList