import React, {Component} from 'react'

export default class Ingredient extends Component {
     render() {
          return (
               <div style={{
                    backgroundColor: this.props.ingredient.color,
                    color: 'blue'
                  }}
                  onClick={this.props.func}
               >
                    {this.props.ingredient.name}
               </div>
          )
     }
}