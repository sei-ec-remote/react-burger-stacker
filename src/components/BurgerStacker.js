import React, { useState, useEffect } from 'react'
import IngredientList from '../components/IngredientList'
import BurgerPane from '../components/BurgerPane'

const BurgerStacker = () => {
  const ingredientsArr= [
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
  ]
    const [ingredient, setIngredients] = useState(ingredientsArr)
    const [burgerIngredients, setBurgerIngredients] = useState([])
    
    // this function adds items to the burgerIngredients array, which allows burgerPane to render them
    const addToStack = (ingredient) => {
      // const ingName = e.target.innerText
      // const ingColor = e.target.style.backgroundColor
      //   setBurgerIngredients({name: ingName, color: ingColor}, ...burgerIngredients)
      setBurgerIngredients( [ingredient,...burgerIngredients])
    }


    const clearBurger = () => {
        // this.setState({
        //     burgerIngredients: []
        // })
        setBurgerIngredients([])
    }

    // this function will remove one ingredient from the burger
    // removeFromStack = (e) => {
    //     console.log('the old stack', this.state.burgerIngredients)
    //     console.log('this is the clicked item \n', e.target)

    //     const clickIndex = e.target.id
    //     console.log('this is clickIndex', clickIndex)

    //     const currBurger = this.state.burgerIngredients.slice()
    //     console.log('this is the current burger', currBurger)

    //     currBurger.splice(clickIndex, 1)
    //     console.log('this is the current burger after splice', currBurger)

    //     this.setState({
    //         burgerIngredients: currBurger
    //     })
    // }


    return (
        <div>
            <h1>Burger Stacker</h1>
            <div className='panes'>
                <IngredientList 
                    ingredients={ingredientsArr}
                    add={addToStack}
                />
                <BurgerPane 
                    ingredients={burgerIngredients}
                    // remove={removeFromStack}
                    clear={clearBurger}
                />
            </div>
        </div>
    )
    
}

export default BurgerStacker