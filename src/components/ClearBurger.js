import React, { Component } from 'react'

class ClearBurger extends Component {

    render() {
        return <button onClick={this.props.clear} className="clear-btn">Clear Burger</button>
    }
}

export default ClearBurger