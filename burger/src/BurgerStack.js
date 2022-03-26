import React, { Component } from 'react';
import './App.css'
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

export default class BurgerStack extends Component {

    constructor () {
        super () 
            this.state = {
                ingredients: [
                    {name: 'Kaiser Bun', color: 'saddlebrown'},
                    {name: 'Sesame Bun', color: 'sandybrown'},
                    {name: 'Gluten Free Bun', color: 'peru'},
                    {name: 'Lettuce Wrap', color: 'olivedrab'},
                    {name: 'Beef Patty', color: '#3F250B'},
                    {name: 'Soy Patty', color: '#3F250B'},
                    {name: 'Black Bean Patty', color: '#3F250B'},
                    {name: 'Chicken Patty', color: 'burlywood'},
                    {name: 'Lettuce', color: 'lawngreen'},
                    {name: 'Tomato', color: 'tomato'},
                    {name: 'Bacon', color: 'maroon'},
                    {name: 'Onion', color: 'lightyellow'}
                ],
                burgerIngs: []
            }
        }
    addToStack= (e) => {
const ingColor = e.target.style.backgroundColor
const ingName = e.target.innerText
this.setState({
    burgerIngs: [
        {name:ingName, color: ingColor}, ...this.state.burgerIngs
    ]
})   
} 
clearBurg= () => {
    this.setState({
        burgerIngs: []
    })
}
render() {
    
        
		return (
			<div >
				
                <div className='panes'>

				<IngredientList 
                ingredients={this.state.ingredients}
                addIngs={this.addToStack}
                />
                <BurgerPane
                ingredients={this.state.burgerIngs}
                clear={this.clearBurg}/>
                </div>
			</div>
			)
	}
}

