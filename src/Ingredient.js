import React, { Component } from 'react';


export default class Ingredient extends Component {
    render(){
        return(
            <div>
                <button className='ingredient' onClick={this.props.addIngredient} style={{backgroundColor: this.props.ingredient.color}}>{this.props.ingredient.name}</button>
            </div>
        )
    }
}