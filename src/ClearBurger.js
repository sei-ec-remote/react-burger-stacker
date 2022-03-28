import React, { Component } from 'react'
import './App.css'

export default function Clear({clearBurger}) {
    return (
        <button onClick={clearBurger}>Clear</button>
    )
  }

// export default class Clear extends Component {
//   render() {
//     return (
//         <button onClick={this.props.clearBurger}>Clear</button>
//     )
//   }
// }