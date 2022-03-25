import React, { Component } from 'react'


export default class Burger extends Component {
    constructor (props) {
        super (props)
        this.state = {
            fruitsToDisplay: this.props.fruits
        }
    }
    

    render () {
        console.log('props', this.props)
        console.log('state', this.state)
        return (
            <div id='burger'>


            </div>
        )
    }
}