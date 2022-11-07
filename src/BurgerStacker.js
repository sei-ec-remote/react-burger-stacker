    import React, { useState } from "react"
    import BurgerPane from "./BurgerPane"
    import IngredientList from './IngredientList'

    const BurgerStacker = (props) =>  {
     
           const ingredientList = [
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

        
        // this function adds items to the burgerIngredients array, which allows burgerPane to render them


       const [ingredients] = useState(ingredientList)
       const[burgerIngredients, setburgerIngredients] = useState([])


        // this function will clear the burgerPane, passed as a propb

        const addToStack = (e) => {
            const ingName = e.target.innerText
            const ingColor = e.target.backgroundColor
        setburgerIngredients([
            {name:ingName, color: ingColor},
            ...burgerIngredients
        ])
        }



        const clearBurger = () => {
            setburgerIngredients({
                burgerIngredients:[]
            })
        }


        //this function will remove one ingredients

        const removeFromStack = (e) => {
            const clickIndex = e.target.id
        

        const currBurger = burgerIngredients.slice()
        currBurger.splice(clickIndex, 1)

        
        setburgerIngredients({
            burgerIngredients: currBurger 
        })
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