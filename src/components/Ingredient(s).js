import React, {Component} from 'react'

class Ingredient extends Component{
	render(){
		return(
			<div>
				<p style={{color: this.props.ingredient.color}}>{this.props.ingredient.name}</p>

			</div>
		)
	}
}

export default Ingredient