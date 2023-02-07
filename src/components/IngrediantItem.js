import React, { Component } from 'react';

const IngrediantItem = (props) => {

    // console.log(props.ingrediant)

    // render() {
        const { name, color } = props.ingrediant

        return (
            <li className="ingredientItem" key={props.index} onClick={props.add} >
                <span style={{backgroundColor: `${color}`}} className="ingrediantName">{name}</span>
            </li>
        )
    // }
}

export default IngrediantItem