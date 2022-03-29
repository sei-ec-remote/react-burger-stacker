import React, {useState, useEffect} from "react";

const Ingredient = (props) => {
    
        const {name, color} = props.ingredient
        return (
            <p style={{backgroundColor: color}}
            id={props.itemKey}
            onClick={props.clickFunc}
            >
                
                {name}
                
                </p>
        )
    
}

export default Ingredient