// function BurgerStack ({value, click}) {
//     console.log(value)
//     const burgerStack = value.map(item => {
//         return (
//             <li style={{backgroundColor:`${item.color}`}}>
//                 {item.name}
//             </li>
//         )
//     })
//     return (
//         <>
//             <ul>
//                 {burgerStack}
//             </ul>
//             <button onClick={click} >Clear</button>
//         </>
      
//     )
// }
// export default BurgerStack

import React, {Component} from "react";

export default class BurgerStack extends Component {
    render () {
        const value = this.props.stack
        let burgerStack = value.map((item, idx) => (
            <li key={idx} style={{backgroundColor:`${item.color}`}}>
                 {item.name}
            </li>
        ))
        
        return (
            <>
                <ul>
                    {burgerStack}
                </ul>
                <button onClick={this.props.clear} >Clear</button>
            </>
        )
    }
}