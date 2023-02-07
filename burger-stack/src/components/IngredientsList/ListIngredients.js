import  './ListIngredients.css'
// function ListIngredients ({ingredients, click}) {
//         return (
//             <>
//             <ul>
//             {ingredients.map((item, idx) =>  
//                 <>
//                 <li onClick={click} style={{backgroundColor: `${item.color}`}} >{item.name}</li>
//                 </>
//                 )}
//             </ul>
//             </>
//            )
// }
// export default ListIngredients

import React, {Component} from "react";

export default class ListIngredients extends Component {
    render () {
        const value = this.props.ingredients
        let allIngredients = value.map((item, idx) => (
            <li key={idx} onClick={this.props.add} style={{backgroundColor:`${item.color}`}}>
                 {item.name}
            </li>
        ))
        return (
            <>
                <ul>
                    {allIngredients}
                </ul>
                
            </>
        )
    }
}