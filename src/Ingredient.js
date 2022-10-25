import React, { Component } from "react"

const ingredient = (props) => {

    const { name, color } = props.ingredient
       
        return (
            <p 
            style ={{backgroundColor: color}}
            id={props.itemKey}
            onClick={props.clickFunc}
            >
                {name}
            </p>
     ) }
