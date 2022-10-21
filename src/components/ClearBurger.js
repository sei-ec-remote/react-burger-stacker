import React, { Component } from 'react'

class ClearBurger extends Component {
    render() {
        return(
                <button className="clearButton" onClick={this.props.clearStack}>Reset</button>
        )
    }
}


export default ClearBurger