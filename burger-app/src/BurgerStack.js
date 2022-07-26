import React, { Component } from 'react'
import App from './App'

class BurgerStack extends Component {
    state = {
        burgIng: this.props.burgIng
    }

 new = () => {this.setState({
        burgIng: this.props.burgIng
    })}

  render() {
    //console.log(this.props.burgIng)
    let stack = this.state.burgIng.map((ing, i) => {
        return <li key={i}>{ing}</li>
    })

   

    return (
      <>
      <ul>
          lisfkdfasdf{stack}
      </ul>
      </>
    )
  }
}

export default BurgerStack