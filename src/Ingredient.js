// this displays an individual ingredient
import React, { useState } from 'react'

// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = (props) => {
        const ingredient = props.ingredient

        return (
            <p
                style={{backgroundColor: ingredient.color}}
                id={props.itemKey}
                onClick={props.clickFunc}
            >
                {ingredient.name}
            </p>
        )
    }
