    import React, { useState } from 'react'


const Ingredient = (props) => {
        const {name,color} = props.ingredient
        // console.log('name of ingred' ,name)
        // console.log('color of ingred' ,color)
        return(
            <p 
                style={{backgroundColor:color}}
                id={props.itemKey}
                onClick={props.clickFunc}
                >
                {name}
            </p>
        )
    }

export default Ingredient