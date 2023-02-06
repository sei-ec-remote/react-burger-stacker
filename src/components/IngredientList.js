import React from 'react'
import Ingredients from './Ingredients'
import ClearBurger from './ClearBurger'
import SmashBurger from './SmashBurger'

function IngredientList(props) {
        // Render ingredient lists
    return (
        <>
            <div className='ingredient-pane'>
                <h3>Ingredients</h3>
                <Ingredients ingredients={props.ingredients} onClick={props.onClick}/>
                <ClearBurger onClick={props.onClear} />
                <SmashBurger onClick={props.onSmash} />
            </div>
        </>
    )
}


export default IngredientList