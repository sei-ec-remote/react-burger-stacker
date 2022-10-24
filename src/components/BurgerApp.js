import React, { useState } from 'react'
import IngredientList from './IngredientList'

const BurgerApp = (props) => {
    const [platedItems, setPlatedItems] = useState([])
    // state = {
    //     platedItems: []
    // }

    const addItem = (e) => {
        console.log('click', e.target)
        setPlatedItems( prevPlatedItems => {
            return [...prevPlatedItems, e.target.textContent]
           })
    }

    const clearBurger = () => {
        console.log('click')
        setPlatedItems([])
    }

    const burgerItems = platedItems.map((item) => {
        console.log(item, 'this is burger item')
        return <div>{item}</div>
    })

    return(
        <>
        <h1>Build a Burger</h1>
        <div className="burger-container">
            <div className="ingredients">
                <IngredientList ingredients={props.ingredients} addItem={addItem}/>
            </div>
            <div className="plate">
                {burgerItems}
            </div>
            <button className="burger-btn" onClick={clearBurger}>Clear<br></br>Burger</button>
        </div>
        </>
    )
}

export default BurgerApp