import React, { Component } from 'react'
import Ingredient from './Ingredient'

class ClearBurger extends Component {
    render() {
        return(
                <button className="clearButton" onClick={this.props.clearStack}>Clear</button>
        )
    }
}


export default ClearBurger