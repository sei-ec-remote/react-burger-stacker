import React, { useState, useEffect } from 'react'
import IngredientList from "./IngredientList.js";
import BurgerPane from "./BurgerPane.js";
//burger stacker component is the parent of BurgerPane and IngredientList



const BurgerStacker = (props) => {

   const [ingredients, setIngredient] = useState( [
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
    const [burgerIngredients, setBurgerIngredients] = useState([])         
              
              

    const addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor
        const ingName = e.target.innerText
        setBurgerIngredients( [
                {name: ingName, color: ingColor },
                ...burgerIngredients
            ]
        )
    }

//    const removeFromStack = (e) => {
//         const clickIndex = e.target.id  
//         const currBurger = burgerIngredients.slice()
//         currBurger.splice(clickIndex, 1)
//         setBurgerIngredients({
//             burgerIngredients: currBurger
//         })
//     }   

   const clearBurger = () => {
        setBurgerIngredients( []
        )
    }


  
        return(
            <div>
            <h1>Burger Stacker</h1>
            <div className="panes">
                 <IngredientList ingredients= {ingredients} 
                 addIngs= {addToStack}
                 />
                <BurgerPane 
                ingredients={burgerIngredients} 
                // remove= {removeFromStack}
                clear= {clearBurger} 
                />
            </div>
            
            </div>
        )
    
}

export default BurgerStacker