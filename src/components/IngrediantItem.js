import React from 'react';

const IngrediantItem = (props) => {

    const { name, color } = props.ingrediant

    return (
        <li className="ingredientItem" key={props.index} onClick={props.add} >
            <span style={{backgroundColor: `${color}`}} className="ingrediantName">{name}</span>
        </li>
    )

}

export default IngrediantItem