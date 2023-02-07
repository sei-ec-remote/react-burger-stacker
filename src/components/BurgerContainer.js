import { Component } from "react";
import BurgerIngrediant from './BurgerIngrediant' 

import IngrediantItem from "./IngrediantItem";

const BurgerContainer = (props) => {

    console.log('props: ', props.ingrediants)

    console.log( typeof(props.ingrediants))

    // for our app, functions changing state needs to be at the parent level
    
    // render() {
        let myStackList = Object.keys(props.ingrediants).forEach((ing, i ) => {
            
            return <BurgerIngrediant 
                        ingrediant={ing}
                        clear={props.clear}
                        remove={props.remove} 
                        key={i} />
        })        
        
        return(
            <div className="container">
                <h2>Burger Stack</h2>
                <div className="burgerStackArea">
                    { myStackList }
                </div>
                <button className="button clear" onClick={props.clear}>Clear Burger</button>
            </div>
        )
    // }
}

export default BurgerContainer