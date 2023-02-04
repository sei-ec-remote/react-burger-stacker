import React, { Component } from 'react'

class BurgerStack extends Component {
    render() {
        const burger = this.props.burger.map((item, index) => {
            return (
                <form key={index}>
                    <button type="submit" value={item} style={{backgroundColor: `${item.color}`}}>{item.name}</button>
                </form>
            )
        })

        return (
            <div>
                {burger}
                <button className='clear' type="submit" onClick={this.props.onClick}>Clear Burger</button>
            </div>
        )
    }
}

export default BurgerStack