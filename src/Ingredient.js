import React from 'react';
import './App.css';


const Ingredient = (props) => {
        return(
            <>
                <div className="ingredient" style={{ backgroundColor: props.ingredient.color}}>
                    {props.ingredient.name}
                </div>
            </>
            )
}



export default Ingredient
