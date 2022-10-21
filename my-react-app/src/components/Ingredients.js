import React, {Component} from 'react'

class Ingredients extends Component {

    render () {
        //const ingredientItems = this.props.ingredients.map((item, index)) => {
            return(
            <div style={{color: this.props.ingredient.color}}>
                Name: {this.props.ingredient.name}
            </div>
            )
    }
}


export default Ingredients