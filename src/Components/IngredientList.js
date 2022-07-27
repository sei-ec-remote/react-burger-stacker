import React from 'react'

import Ingredients from './Ingredients'

const IngredientList =(props)=>{


    // const ingredients= [
    //     {name: 'Kaiser Bun', color: 'saddlebrown'},
    //     {name: 'Sesame Bun', color: 'sandybrown'},
    //     {name: 'Gluten Free Bun', color: 'peru'},
    //     {name: 'Lettuce Wrap', color: 'olivedrab'},
    //     {name: 'Beef Patty', color: '#3F250B'},
    //     {name: 'Soy Patty', color: '#3F250B'},
    //     {name: 'Black Bean Patty', color: '#3F250B'},
    //     {name: 'Chicken Patty', color: 'burlywood'},
    //     {name: 'Lettuce', color: 'lawngreen'},
    //     {name: 'Tomato', color: 'tomato'},
    //     {name: 'Bacon', color: 'maroon'},
    //     {name: 'Onion', color: 'lightyellow'}]
       // map over the ingredients
       // mapped over and created from Ingredient Component

    let allIngredients = props.ingredients.map((ing, index)=>(
        <li key={index}>
            <Ingredients
                ingredient={ing}
                clickFunction={(e) => props.add(e)}
                itemKey={index}
            />
        </li>
    ))
    return (
        <>
            <section>
                <h3> Ingredients List </h3>
                <ul>
                    {allIngredients}
                </ul>
            </section>
        </>
    )
}

export default IngredientList
