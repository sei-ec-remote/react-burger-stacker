import React, { useState } from 'react'
import BurgerPane from './BurgerPane'
import IngredientList from './IngredientList'

const BurgerStacker = () => {
   
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
        {name: 'Onion', color: 'lightyellow'},
        {name: 'Cheese', color: 'gold'}
    ])
    const [burgerIngredients, setBurgerIngredients] = useState([])

    // this function adds items to the burgerIngredients array, which allows burgerPane to render them
    const addToStack = (ingredient) => {
        

       setBurgerIngredients([...burgerIngredients, ingredient])
        
    }

    // this function will clear the burger pane, passed as a prop to that comp. but lives her to set state
     const clearBurger = () => {
       setBurgerIngredients({
            burgerIngredients:[]
        })
    }

    //this function will remove one ingredient from the burger
    const removeFromStack = (e) => {
        // we need to find the ingredeient in the array
        const clickIndex = e.target.id
        // helpful to have copy of the og array
        const currBurger = burgerIngredients.slice()
        // then we remove item from copy of array
        currBurger.splice(clickIndex, 1)
        // then set state with copy of array
        setBurgerIngredients({
            burgerIngredients: currBurger
        })

    }


    return (
        <main>
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
        </main>
    )
    
}

export default BurgerStacker