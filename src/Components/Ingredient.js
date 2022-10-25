// this displays an individual ingredient
import React  from 'react'

// this component recieves ONE ingredient as a prop and displays said ingredient
const Ingredient = (props) => {
    console.log('these are the Ingredient props', props)
    const { name, color } = props.ingredient

    return (
        <p
            style={{backgroundColor: color}}
            id={props.itemKey}
            onClick={() => props.clickFunc(props.ingredient)}
        >
            {name}
        </p>
    )
    
}

export default Ingredient