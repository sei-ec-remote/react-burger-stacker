import React from 'react'

// Ingredient is a hild of Ingredient List
// It recieves props of an individual ingredient --> color and name

const Ingredient = (props) =>
{
        // destructuring is how we pull items from an object
        // this looks for properties within the ingredient object
        const {name, color} = props.ingredient
        // console.log('this is an ingredient', this.props.ingredient.name)
        // console.log('name in each ingredient', name)
        // console.log('color in each ingredient', color)
        return(
            <p 
                style={{backgroundColor: color}}
                id={props.itemKey}
                onClick={props.clickFunc}
            >
                {name}
            </p>
        )
}

export default Ingredient