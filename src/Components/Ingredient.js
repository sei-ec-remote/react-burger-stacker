import React, { Component } from "react";


export default class Ingredient extends Component {
    render(){
        const { name, color } = this.props.ingredient
        const id = this.props.itemKey
        return (
            <li key={id} style={{ backgroundColor: color }} onClick={this.props.clickFunc}>{name}</li>
            
        )
    }
}

