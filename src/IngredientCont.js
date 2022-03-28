import React, { useState } from 'react'
import IngredientList from './IngredientList'
import './App.css';

//refactored to functional component!
export default function IngredientCont (props) {

    const [ingredientsToDisplay] = useState(props.choices)

    return (
        <div className='ing-container'>
            <IngredientList ingredients={ingredientsToDisplay}/>
        </div>
    )
}