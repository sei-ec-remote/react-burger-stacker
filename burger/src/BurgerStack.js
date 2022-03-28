import React, { useState} from 'react';
import './App.css'
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

export default function BurgerStack () {

    
         
    const [ingredients, setIngredients] = useState([
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
                ])
                const [burgerIngs, setBurgerIngs ] = useState([])
            
        
const addToStack= (e) => {
const ingColor = e.target.style.backgroundColor
const ingName = e.target.innerText
setBurgerIngs([{name:ingName, color: ingColor}, ...burgerIngs]) 
} 
const clearBurg= () => {
        setBurgerIngs([])
}

    
        
		return (
			<div >
				
                <div className='panes'>

				<IngredientList 
                ingredients={ingredients}
                addIngs={addToStack}
                />
                <BurgerPane
                ingredients={burgerIngs}
                clear={clearBurg}/>
                </div>
			</div>
			)
	}


