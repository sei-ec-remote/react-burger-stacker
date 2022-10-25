import React, { useState } from 'react'
import IngredientList from './IngredientList'
import BurgerPane from './BurgerPane'

const BurgerStacker = () => {

    const defaultIngredients = [
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
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'gold'}]
    

    const [ingredients, setIngredients] = useState(defaultIngredients)
    const [burgerIngredients, setBurgerIngredients] = useState([])
    
    // this function adds items to the burgerIngredients array, which allows burgerPane to render them
     const addToStack = (e) => {
        const ingName = e.target.innerText
        const ingColor = e.target.style.backgroundColor
        setBurgerIngredients([...burgerIngredients, { name: ingName, color: ingColor} ])
            

    }

    // this function will clear the burgerPane, passed as a prop to that component, but lives here so it can setState
   const clearBurger = () => {
       setBurgerIngredients([])
        
    }

    // this function will remove one ingredient from the burger
   const removeFromStack = (e) => {
      
        console.log('this is the clicked item \n', e.target)
      
        const clickIndex = e.target.id
        console.log('this is clickIndex', clickIndex)
    
        const currBurger = burgerIngredients.slice()
        console.log('this is the current burger', currBurger)
       
        currBurger.splice(clickIndex, 1)
        console.log('this is the current burger after splice', currBurger)
       
        setBurgerIngredients(currBurger)
    }

    
        return (
            <div>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                    <IngredientList 
                        ingredients={ingredients}
                        add={addToStack}
                    />
                    <BurgerPane 
                        ingredients={burgerIngredients}
                        remove={removeFromStack}
                        clear={clearBurger}
                    />
                </div>
            </div>
        )
    
}

export default BurgerStacker