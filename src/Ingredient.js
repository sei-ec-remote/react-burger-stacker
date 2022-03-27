 //ingredient is a child of ingredient list
 //it receives props of an individual ingredient
 import React, {Component} from 'react';

 export default class ingredient extends Component {
     render()  {
         console.log('prop in each component', this.props)
         const {name, color} = this.props.ingredient
         return(
             <p style={{backgroundColor:color}}>{name}</p>
         )
     }
 } 