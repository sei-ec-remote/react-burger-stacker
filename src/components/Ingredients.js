import React , { Component } from 'react'
import './Ingredients.css'

class Ingredients extends Component {

  render() {
    return (
      <div className='ingredient'>
          <span className='ingredient'>
              {this.props.ingredient.name}
              {' '}
          </span>
          <input type="button"
              name={this.props.ingredient.name}
              value='+'
              onClick={this.props.onClick}
          />
      </div>
    );
  }
}
  
export default Ingredients;