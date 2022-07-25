import React, { Component } from 'react';

class ClearBurger extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.onClick}>This Button Will Clear Burger</button>
            </div>
        );
    }
}

export default ClearBurger;
