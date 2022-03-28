import React, {Component} from 'react'
import Ingredients from './Ingredients'


export default class IngredientList extends Component {
    constructor (props){
        super(props)

        this.state = {
            ingredientsToDisplay: this.props.ingredients
        }
    }
    render () {
        return (
            <div className="ingContainer">
                
                <Ingredients ingredient ={this.state.ingredientsToDisplay}/>
            </div>
        )
    }
}
