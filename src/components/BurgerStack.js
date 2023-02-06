import React, { Component } from 'react'


class BurgerStack extends Component {
    render () {
        const burger = this.props.burger.map((item, index) => {
            return (
                <div className='burger' key={index}>
                    <div style={{backgroundColor: `${item.color}`}} onClick={this.props.remove}>{item.name}</div>
                </div>
            )
        })
        return (
            <div>
                {burger}
            </div>
        )
    }
}

export default BurgerStack