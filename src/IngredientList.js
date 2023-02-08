// loops over the ingredients derived from props
// produces a clickable ingredient for each of them

// import React, { Component } from 'react'
import Ingredient from './Ingredient'

// export default class IngredientList extends Component {
    const IngredientList = (props) => {

        // here is a callback function inside map. The parameter ing refers to ingredients and i refers to the index
        let allIngredients = props.ingredients.map((ing, i) => (
            // this produces list items
            <li key={i}>
                <Ingredient
                    ingredient={ing}
                    itemKey={i}
                    clickFunc={props.add}
                />
            </li>
        ))

        return (
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    { allIngredients }
                </ul>
            </section>
        )
  
}

export default IngredientList