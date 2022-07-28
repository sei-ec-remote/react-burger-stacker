import React, {Component} from 'react'

export default class ClearBurger extends Component {
     render() {
          return (
               <button onClick={this.props.removeAll}>I messed up so badly I need to start over!</button>
          )
     }
}