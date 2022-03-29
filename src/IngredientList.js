import React from 'react'
import Ingredient from './Ingredient'

// ingredient list will loop over props (ingredients) passed to it
// will produce one Ingredient component for each item in the array

const IngredientList = (props) =>
{
        // console.log('props in ingredients list', this.props.ingredients)
        // ing = ingredient, i = index of the array
        let allIngredients = props.ingredients.map( (ing, i) => (
            <li key={i}><Ingredient itemKey={i} ingredient={ing} clickFunc={props.add}/></li>
        ))

        return(
            <section className='pane'>
                <h3>Ingredients List</h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        )
}

export default IngredientList