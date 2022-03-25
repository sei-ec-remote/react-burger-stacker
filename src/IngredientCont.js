import React, { Component } from 'react'
import IngredientList from './IngredientList'
import './App.css';


export default class IngredientCont extends Component {
    constructor (props) {
        super (props)
        this.state = {
            ingredientsToDisplay: this.props.choices
        }
    }
    addLayer = (e) => {
        let burger = document.getElementById('burger')
        let layer = document.createElement('div').innerText(`${e.target.innerText}`)
        burger.appendChild(layer)
    }
    

    render () {
        console.log('props', this.props)
        console.log('state', this.state)
        return (
            <div className='ing-container'>
                <IngredientList ingredients={this.state.ingredientsToDisplay}/>

            </div>
        )
    }
}