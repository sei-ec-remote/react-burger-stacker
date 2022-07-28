import React from 'react'

const Ingredient = ({ingredient, clickFunc, itemKey}) => {		// I want to render a background color
        // I want to render the name of a ing
        // if there is a key with this `name` extract it
        const { name, color } = ingredient
		return (
            <p 
                style={{backgroundColor: color}}
                onClick={clickFunc}
                id={itemKey}
            >
                {name}
            </p>
        )
	
}

export default Ingredient