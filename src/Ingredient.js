import React, { Component } from 'react'
import './index.css'

export default function Ingredient (props) {
 
    // console.log('props in each ingredient', this.props)
    const { name, color } = props.ingredient
    // console.log('props in each color', color)
    // console.log('props in each name', name)
    return (
        <p 
            style={{backgroundColor: color}}
            id={props.itemKey}
            onClick={props.clickFunc}
        >
            {name}
        </p>
    )
    
}