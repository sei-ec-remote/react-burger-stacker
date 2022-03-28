import React, { Component } from 'react';


 const StackIngredient = (props) => {
        return(
            <div>
                <div className='stackItem' style={{backgroundColor: props.ingredient.object.color}}>{props.ingredient.object.name}</div>
            </div>
        )
}

export default StackIngredient