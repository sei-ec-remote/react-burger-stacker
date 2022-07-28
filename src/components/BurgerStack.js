import React from 'react'
import './BurgerStack.css'

const BurgerStack = (props) => {
    
    const white = 'white'
    const textShadow = '1px 1px 3px black'
    return (
        <div className="burger">
            <div className="one-ingredient" style={{backgroundColor: props.addedIngredientColor, color: white, textShadow: textShadow}}> 
                {props.addedIngredientName}
            </div>
        </div>
    );
}
  
export default BurgerStack;