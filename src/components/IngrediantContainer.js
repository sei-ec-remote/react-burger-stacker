import React, { Component } from 'react';

import IngrediantItem from './IngrediantItem'

const IngrediantContainer = (props) => {

    // console.log('props: ', props.burgerIngrediants)
    // console.log(props.ingrediants)
    // console.log(typeof(props.ingrediants))

    // return every item in the given list, map it into its own list item
    let allIngrediants = props.ingrediants.map((ing, i) => (
        
        <IngrediantItem 
                    name={ing.name} 
                    color={ing.color} 
                    key={i} 
                    index={i}
                    ingrediant={ing}
                    add={props.add}
                />
    ))

    return(
        <>
            <div className="container burgerContainer">
                <h2>Ingrediants</h2>
                <ul>
                    { allIngrediants }
                </ul>
            </div>
        </>
    )
    
}

export default IngrediantContainer