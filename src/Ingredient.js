import React, { Component } from 'react'
import './App.css';


export default class Ingredient extends Component {
    constructor(props){
        super(props)
    }
        render(){
            return(
                <>
                    <div class="ingredient" style={{ backgroundColor: this.props.ingredient.color}}>
                        {this.props.ingredient.name}
                    </div>
                </>
                )
        }

}
