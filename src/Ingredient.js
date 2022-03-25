import React, { Component } from 'react'


export default class Ingredient extends Component {
    constructor(props) {
        super(props)
        this.state= {
            ingredients:this.props.ingredientList,
            burgerIngredients:[]
        }
    }

    addIngredient = (e) => {
        let burgerArray = this.state.burgerIngredients
        burgerArray.push(e.target.name)
        this.setState({
            burgerIngredients:burgerArray
        })
    }

    render() {
        return(
            <button
                className = 'ingredient'
                type='submit'
                value='Add Ingredient'
                onClick={this.props.addIngredient}
            > Add to Burger
            </button>
        )
    }
}