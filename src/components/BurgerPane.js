import React, { Component } from 'react'
import Ingredients from './Ingredients'


class BurgerPane extends Component {
	render() {
        console.log('burger', {thing: this.props.burgerArray})

		return (
            <>
                {/* in one child component I am getting user input
                in anouther child component I am rendering the fruits and the filter fruits */}
                {/* <Input value={this.state.filterValue} onChange={this.handleFilterChange}/> */}
                <ul>{this.props.Ingredients}</ul>
            </>
        )
	}
}

export default BurgerPane

