import React, { Component } from 'react'

class ClearBurger extends Component {
    render() {
        return (
            <>
                <button className="clear-button" type="Submit" onClick={this.props.onClick}>X</button>
            </>
        )
    }
}

export default ClearBurger