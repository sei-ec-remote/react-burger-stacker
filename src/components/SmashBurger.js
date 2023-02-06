import React, { Component } from 'react'

class SmashBurger extends Component {
    render() {
        return (
            <>
                <span>  
                    <button className="clear-button" id="up" type="Submit" onClick={this.props.onClick}>Smash</button>
                    <button className="clear-button" id="down" type="Submit" onClick={this.props.onClick}>Unsmash</button>
                </span>
            </>
        )
    }
}

export default SmashBurger