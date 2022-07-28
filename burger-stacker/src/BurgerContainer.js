import React from 'react'


import Ingredient from './Ingredient.js'

const BurgerContainer = ({ingredients,remove,clear}) => { // still using props, just destucturing it
    // no JSx really. For JS functions or State. Can map up here but can't return a li

        console.log("ingredients@@@@@",ingredients);
        let burgerBits = ingredients.map((ing, idx) => (
            <li key={idx}>  
                <Ingredient
                    itemKey={idx}
                    ingredient={ing}
                    clickFunc={remove}
                
                />
                    </li>
        ))
        
        return (
            <section>
            <h3>Burger Pane</h3>
            <ul>
                {burgerBits}
            </ul>
            <button onClick={clear}>Clear Burger</button>
        </section>

        )
    }



// !!!!!!!!!!!
export default BurgerContainer