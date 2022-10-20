import React from "react"

const BurgerItem = (props) => {
    const {name, color} = props.ingredient
    return (
        <div className='ingredient' style={{backgroundColor: `${color}`}}>{name}</div>
    )
}

export default BurgerItem