import React, { Component } from 'react';

class ClearBurger extends Component {
    render() {
        return (
            <div>
                <div>
                    <button onClick={this.props.removeLast}>Oops! Remove last ingredient</button>
                </div>
                <div>
                    <button onClick={this.props.onClick}>This Button Will Clear Burger</button>
                </div>
            </div>
        );
    }
}

export default ClearBurger;
