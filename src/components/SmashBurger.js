import React, { Component } from 'react'

class SmashBurger extends Component {
    render() {
        return (
            <>
                <span>  
                    <button className="clear-button" id="up" type="Submit" onClick={this.props.onClick}>Up</button>
                    <button className="clear-button" id="down" type="Submit" onClick={this.props.onClick}>Down</button>
                </span>
            </>
        )
    }
}

export default SmashBurger