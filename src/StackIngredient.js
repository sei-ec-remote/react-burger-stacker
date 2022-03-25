import React, { Component } from 'react';


export default class StackIngredient extends Component {
    render(){
        return(
            <div>
                <div className='stackItem' style={{backgroundColor: this.props.ingredient.object.color}}>{this.props.ingredient.object.name}</div>
            </div>
        )
    }
}