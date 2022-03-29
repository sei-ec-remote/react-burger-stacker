import React, { useState } from 'react';
import BurgerPane from './BurgerPane';
import IngredientList from './IngredientList';

const BurgerStacker = () => {
    const [ingredients, setIngredients] = useState(
        [
            { name: 'Kaiser Bun', color: 'saddlebrown' },
            { name: 'Sesame Bun', color: 'sandybrown' },
            { name: 'Gluten Free Bun', color: 'peru' },
            { name: 'Lettuce Wrap', color: 'olivedrab' },
            { name: 'Beef Patty', color: '#3F250B' },
            { name: 'Soy Patty', color: '#3F250B' },
            { name: 'Black Bean Patty', color: '#3F250B' },
            { name: 'Chicken Patty', color: 'burlywood' },
            { name: 'Lettuce', color: 'lawngreen' },
            { name: 'Tomato', color: 'tomato' },
            { name: 'Bacon', color: 'maroon' },
            { name: 'Onion', color: 'lightyellow' },
        ]
    )
    const [burgerIngredients, setBurgerIngredients] = useState([])
    
    const addToStack = (e) => {
        const ingColor = e.target.style.backgroundColor;
        const ingName = e.target.innerText;
        setBurgerIngredients([{ name: ingName, color: ingColor }, ...burgerIngredients]);
    };
    
    // const removeFromStack = (e) => {
    //     const clickIndex = e.target.id;
    //     const currBurger = burgerIngredients.slice();
    //     currBurger.splice(clickIndex, 1);
    //     setBurgerIngredients({ burgerIngredients: currBurger });
    // };
    
    const clearBurger = () => {
        setBurgerIngredients([]);
    };
    
    return (
        <>
        <h1>Burger Stacker</h1>
        <div className="panes">
          <IngredientList
            ingredients={ingredients}
            add={addToStack}
            />
          <BurgerPane
            ingredients={burgerIngredients}
            // remove={removeFromStack}
            clear={clearBurger}
            />
        </div>
      </>
    );
};

export default BurgerStacker;