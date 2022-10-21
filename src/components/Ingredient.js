import React, { Component } from 'react'

class Ingredient extends Component {

    render() {
        return(
            <>
                <li onClick={this.props.handleClickedIngredient}>{this.props.ingredient}</li>
            </>
        )
    }
}


export default Ingredient