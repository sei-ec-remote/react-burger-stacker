import React, { Component } from 'react'
import Burger from './Burger'


export default class BurgerPane extends Component {
    constructor (props) {
        super (props)
        this.state = {
            fruitsToDisplay: this.props.fruits
        }
    }
    clrBurger = (e) => {
        const burger = document.getElementById('burger')
        while(burger.firstChild) {
            burger.removeChild(burger.firstChild)
        }
    }

    render () {
        console.log('props', this.props)
        console.log('state', this.state)
        return (
            <div>
                <Burger />
                <button onClick={this.clrBurger}>Clear Burger!</button>

            </div>
        )
    }
}