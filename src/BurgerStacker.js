    import React, { Component, useState } from "react"
    import IngredientList from "./IngredientList"
    import BurgerPane from "./BurgerPane"

    const BurgerStacker = (props) =>  {
    
            
           const ingredientsList = [
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
        ]

        }
        // this function adds items to the burgerIngredients array, which allows burgerPane to render them


       const [ingredients, setIngredients] = useState(ingredientsList)
       const[burgerIngredients, setburgerIngredients] = useState([])


        // this function will clear the burgerPane, passed as a propb

        const clearBurger = () => {
            setburgerIngredients([])
        }


        //this function will remove one ingredients

        const removeFromStack = (e) => {
            const clickIndex = e.target.id
        

        const currBurger = burgerIngredients.slice()
        currBuger.splice(clickIndex, 1)

        }
        setburgerIngredients(currBuger)

            return (
                <div>
                <h1>Burger Stacker</h1>
                <div className='panes'>
                <IngredientList
                            ingredients={state.ingredients}
                            add={addToStack}
                            />
                        <BurgerPane
                            ingredients={state.burgerIngredients}
                            remove={removeFromStack}
                            clear={clearBurger}
                        />
                    </div>
                </div>
                

            )
            export default BurgerStacker