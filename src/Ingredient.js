import React, {Component} from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

export default class Ingredients extends Component {
    render () {
        const {name, color} = this.props.ingredient
        return(
           <p style={{backgroundColor: color}}>{name}</p>
        )
    }
}