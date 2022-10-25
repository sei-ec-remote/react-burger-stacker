import React from 'react'
import Ingredient from './Ingredient'

const IngredientList = (props) => {
    console.log('these are the props', props)
    let allIngredients = props.ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient 
                itemkey={i}
                ingredient={ing}
                clickFunc={props.add}
            />
        </li>
    ))

    return (
        <section className='pane'>
            <h3>INGREDIENT LIST</h3>
            <ul>
                {allIngredients}
            </ul>
        </section>
    )
}

export default IngredientList