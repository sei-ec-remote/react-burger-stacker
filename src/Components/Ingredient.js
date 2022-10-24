import React from "react"

const Ingredient = (props) => {
    
    const Style = {
        background: props.color,
        color: props.textColor
    }
    return (
        <div className="Ingredient" style={Style} onClick={() => props.clickItem(props.name, props.color, props.textColor, props.index)}>
            <h5>{props.name}</h5>
        </div>
    )

}

export default Ingredient