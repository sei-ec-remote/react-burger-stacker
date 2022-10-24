import React from "react"
import Ingredient from "./Ingredient"

const BurgerStack = (props) => {
    
    const stack = props.stack
    let stackItems = stack.map((item, index) => {
        return <Ingredient key={index} index={index} name={item.name} color={item.color} textColor={item.textColor} clickItem={props.removeItem} /> 
    })
    
    return (
            <div id="Stack">
                {stackItems}
            </div>
    )

}

export default BurgerStack