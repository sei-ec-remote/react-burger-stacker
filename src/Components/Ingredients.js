import React from 'react'

const Ingredients =(props)=> {
       // I want to render a background color
       // I want to render a name of a ingredient
       // if there is a key with this 'name' extract it
const { name, color } = props.ingredient
return (
    <p
    style={{backgroundColor: color}}
    onClick={props.clickFunction}
    id={props.itemKey}
    >
        {name}
    </p>
)
}

export default Ingredients
