import React from 'react'

const Ingredient = (props) =>  {
    // I want to render a background color
    // I want to render the name of a ing
    // if there is a key with this `name` extract it
    const { name, color } = props.ingredient
    // can we do conditional style formatting so it's easier to see the text?
    // yes - with ternery operator!
    if (color === 'rgb(63, 37, 11)') {
        
    }
    return (
        <p className={`${color === 'rgb(63, 37, 11)' ? 'whiteText' : ''}`}
            style={{backgroundColor: color}}
            onClick={props.clickFunc}
            id={props.itemKey}
        >
            {name}
        </p>
    )
}

export default Ingredient