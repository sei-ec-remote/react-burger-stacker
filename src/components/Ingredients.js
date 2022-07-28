import React from 'react'
import './Ingredients.css'

const Ingredients = (props) => {

  return (
    <div className='ingredient'>
        <span className='ingredient'>
            {props.ingredient}
            {' '}
        </span>
        <input type="button"
            name={props.ingredient}
            color={props.color}
            value='+'
            onClick={props.handleStateChange}
        />
    </div>
  );
}
  
export default Ingredients;