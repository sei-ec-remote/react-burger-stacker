import React, { Component } from 'react'

class ClearBurger extends Component {
    render() {
        // Render button to clear burgers
        return (
            <>
                <button className="clear-button" type="Submit" onClick={this.props.onClick}>X</button>
            </>
        )
    }
}

export default ClearBurger