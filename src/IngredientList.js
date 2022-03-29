// import react component
import React from 'react'
import Ingredient from './Ingredients'




const IngredientList = (props) => {

    console.log('what is props in IngredientList', props)

    let allIngredients = props.ingredients.map((ing, i) => (
        <li key={i}>
            <Ingredient itemKey={i} ingredient={ing} clickFunc={props.addIng}/>
        </li>
    ))

    return (
        <section className='pane'>
            <h3>Ingredients List</h3>
            <ul>
                {allIngredients}
            </ul>
        </section>
    )
}

export default IngredientList


