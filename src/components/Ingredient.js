import React from "react"

const Ingredient = (props) => {
    const {name, addHandler} = props
    return(
        <>
            <li >
                <span className="ingredient-name">{name}</span>
                <span>
                    <button data-target={name} onClick={addHandler}>add</button>
                </span>
            </li>
        
        </>
    )
}

export default Ingredient