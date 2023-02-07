import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant' 

import IngrediantItem from "./IngrediantItem";

const BurgerContainer = (props) => {

    // for our app, functions changing state needs to be at the parent level
    console.log(props.ingrediants)
    console.log(typeof(props.ingrediants))
    
    let myStackList = props.ingrediants.map((ing, i) => (
        
            <BurgerIngrediant 
                    ingrediant={ing}
                    clear={props.clear}
                    remove={props.remove} 
                    key={i} />
    ))        
    
    // console.log(myStackList)

    return (
        <div className="container">
            <h2>Burger Stack</h2>
            <div className="burgerStackArea">
                {/* { myStackList } */}
            </div>
            <button className="button clear" onClick={props.clear}>Clear Burger</button>
        </div>
    )

}

export default BurgerContainer