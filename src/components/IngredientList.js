// loops over ingredients from props and displays one Ingredient component per item
import React, { Component } from 'react'
import Ingredient from './Ingredient'
import { useState } from 'react'

const IngredientList = (props) => {

        let allIngredients = props.ingredients.map((ing, i) => (
            <li key={i}>
                <Ingredient
                    itemKey={i}
                    ingredient={ing}
                    clickFunc={props.add}
                />
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